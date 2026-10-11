# Privacy design

This project uses real e-commerce data in the private workspace, but the public application does not receive the raw business data.

## Private layer

The private Command Center can use exact information such as sales, orders, AOV, conversion, product names, inventory units and operational counts.

This private code and the Shopify credentials are not included in this public repository.

## Public layer

Before data reaches the public application, Google Apps Script creates a sanitized Portfolio snapshot on the server.

The public application can read only this sanitized snapshot.

It does not have a Real Mode endpoint.

The public version removes or hides:

- Exact sales values
- Exact order counts
- Exact AOV
- Exact conversion rate
- Exact monthly target values
- Real product names
- Revenue by product
- Exact inventory units
- Exact operational counts

Product labels are anonymized as Product 1, Product 2, Product 3, etc.

Charts can show relative trends, but they do not expose the original commercial scale.

## Repository safety

This repository does not contain:

- Shopify access tokens
- Customer data
- Private spreadsheet IDs
- Company names or internal locations
- Private Web App URLs
- Raw business exports

`PUBLIC_SOURCE_SPREADSHEET_ID_` in `public-dashboard/Code.gs` is a placeholder on purpose.
