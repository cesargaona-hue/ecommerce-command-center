# Public dashboard source

This folder contains the public Portfolio application only.

It is designed for Google Apps Script and reads a pre-sanitized `PUBLIC_PORTFOLIO` snapshot from Google Sheets.

## Important

The private Shopify pipeline is not included in this repository.

Before deployment, the owner must set a private spreadsheet ID in `Code.gs`:

```javascript
const PUBLIC_SOURCE_SPREADSHEET_ID_ = 'YOUR_PRIVATE_SPREADSHEET_ID';
```

Do not commit the real spreadsheet ID to a public repository.

The public app has no Real Mode endpoint and no Shopify credentials.
