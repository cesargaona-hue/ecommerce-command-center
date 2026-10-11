# Architecture — E-commerce Command Center

```mermaid
flowchart TD
    A[Shopify] --> B[Shopify Admin API]
    A --> C[ShopifyQL]
    B --> D[Google Apps Script]
    C --> D
    D --> E[Google Sheets Data Layer]
    E --> F[Private Command Center]
    F --> G[Real Mode]
    F --> H[Portfolio Mode]
    H --> I[Server-side Sanitization]
    I --> J[Public Portfolio Snapshot]
    J --> K[Public Command Center]
```

## Simple explanation

1. Shopify is the main data source.
2. ShopifyQL provides analytics data.
3. The Admin API provides operational data.
4. Google Apps Script collects and processes the information.
5. Google Sheets works as the data layer.
6. The private dashboard can use Real Mode or Portfolio Mode.
7. The public dashboard only receives sanitized Portfolio data.
