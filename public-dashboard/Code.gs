/**
 * COMMAND CENTER — M8.2 Public Portfolio App
 *
 * Standalone Apps Script project. Public-facing by design.
 * It reads ONLY pre-sanitized snapshots from PUBLIC_PORTFOLIO.
 * There is no REAL endpoint and no write endpoint in this project.
 */
const PUBLIC_APP_VERSION_ = 'M8-public-v1';
const PUBLIC_SOURCE_SPREADSHEET_ID_ = 'PASTE_SOURCE_SPREADSHEET_ID_HERE';
const PUBLIC_SNAPSHOT_SHEET_ = 'PUBLIC_PORTFOLIO';
const PUBLIC_ALLOWED_RANGES_ = ['month', '7d', '30d', 'ytd'];

function doGet() {
  const tpl = HtmlService.createTemplateFromFile('Index');
  tpl.dashboardVersion = PUBLIC_APP_VERSION_;
  return tpl.evaluate()
    .setTitle('Command Center — Portfolio')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function ccInclude_(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/** The only browser data endpoint in the public project. */
function getPublicPortfolioData(rangeKey) {
  const key = String(rangeKey || 'month').toLowerCase();
  if (PUBLIC_ALLOWED_RANGES_.indexOf(key) < 0) throw new Error('Rango no permitido.');
  if (!PUBLIC_SOURCE_SPREADSHEET_ID_ || PUBLIC_SOURCE_SPREADSHEET_ID_ === 'PASTE_SOURCE_SPREADSHEET_ID_HERE') {
    throw new Error('Configura PUBLIC_SOURCE_SPREADSHEET_ID_ en Code.gs antes de desplegar.');
  }

  const ss = SpreadsheetApp.openById(PUBLIC_SOURCE_SPREADSHEET_ID_);
  const sh = ss.getSheetByName(PUBLIC_SNAPSHOT_SHEET_);
  if (!sh) throw new Error('No existe PUBLIC_PORTFOLIO. Ejecuta primero el exportador M8 en el proyecto privado.');

  const values = sh.getDataRange().getValues();
  if (values.length < 2) throw new Error('PUBLIC_PORTFOLIO está vacío.');

  const chunks = values.slice(1)
    .filter(function(row) { return String(row[0] || '').toLowerCase() === key; })
    .sort(function(a, b) { return Number(a[2] || 0) - Number(b[2] || 0); });

  if (!chunks.length) throw new Error('No existe snapshot público para ' + key + '.');

  const expected = Number(chunks[0][3] || 0);
  if (!expected || chunks.length !== expected) throw new Error('Snapshot público incompleto para ' + key + '.');

  const payload = chunks.map(function(row) { return String(row[4] || ''); }).join('');
  const envelope = JSON.parse(payload);
  const data = envelope && envelope.data;

  if (!data || data.mode !== 'PORTFOLIO' || !data.privacy || data.privacy.sanitizedServerSide !== true) {
    throw new Error('Snapshot rechazado por el contrato de privacidad.');
  }

  return data;
}
