# Public app setup

This repository contains the public Portfolio front-end, not the private Shopify data pipeline.

## Files

Copy these files to a standalone Google Apps Script project:

- `Code.gs`
- `Index.html`
- `Styles.html`
- `Dashboard.html`

## Data source

The public application expects a Google Sheet tab named `PUBLIC_PORTFOLIO`.

That tab must contain server-side sanitized snapshots created by the private project.

Set the spreadsheet ID in `Code.gs` only inside your private Apps Script project. Do not publish that ID in GitHub.

## Deployment

Deploy the standalone project as a Google Apps Script Web App.

The public application supports these ranges:

- This month
- Last 7 days
- Last 30 days
- Year to date

## Security rule

Do not connect the public project directly to Shopify.

The public project should read only sanitized Portfolio data.
