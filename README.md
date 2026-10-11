# E-commerce Command Center

A real e-commerce dashboard built with Shopify, Google Apps Script and Google Sheets.

This project connects business data from Shopify and transforms it into a clear dashboard for daily decisions.

The public version uses sanitized data. It does not show real sales values, real product names, customer data or private business information.

## Live demo

Public dashboard:

https://script.google.com/macros/s/AKfycbz2nLW6PCinA1p3scRjPijxPiwUTWxqGLp6l8n9qwKRpDkqdclZe4Ddmdx-haBD9ePs/exec

## The problem

E-commerce teams work with many types of data: sales, orders, products, inventory and fulfillment.

This information can be in different places, so it is difficult to see the full situation quickly.

I built one Command Center to connect this information and show it in one place.

## What the dashboard includes

- Overview with main KPIs
- Sales performance
- Product performance
- Inventory health
- Operations status
- Monthly target progress
- Current period vs previous period
- Automatic data updates
- Private Real Mode
- Public Portfolio Mode

## Main views

### Overview

A fast summary of the business with KPIs, monthly target, sales trend, products and operations.

### Sales

Shows sales performance, period comparison, monthly progress and daily trends.

### Products

Shows product performance and ranking.

In the public version, product names are anonymized as Product 1, Product 2, Product 3, etc.

### Inventory

Shows stock health, low stock, out of stock and inventory attention areas.

### Operations

Shows fulfillment and operational status without exposing private counts in the public version.

## Architecture

```text
Shopify
  ↓
Shopify Admin API + ShopifyQL
  ↓
Google Apps Script
  ↓
Google Sheets data layer
  ↓
Private dashboard
  ├─ Real Mode
  └─ Portfolio Mode
        ↓
Sanitized public snapshot
        ↓
Public portfolio dashboard
```

## Data privacy

Privacy is an important part of this project.

The public dashboard does not receive raw commercial values from the private dashboard.

Before the data reaches the public application, the server creates a sanitized version.

The public version hides or removes:

- Real sales values
- Real order counts
- Real AOV
- Real conversion rate
- Real monthly target values
- Real product names
- Revenue by product
- Exact inventory units
- Exact operational counts

The public version can still show trends, relative changes and anonymized information.

## Data pipeline

The pipeline updates Shopify data automatically.

It uses incremental updates for orders and different refresh intervals for products, inventory and analytics.

The system also checks data quality, freshness and privacy rules.

## Quality checks

The project includes automated validation for:

- Required data sheets
- Pipeline status
- Data freshness
- Daily analytics integrity
- Hourly trigger
- Portfolio privacy
- Real dashboard endpoint
- Portfolio dashboard endpoint
- Monthly target
- Stable Web App deployment

## Tools used

- Shopify
- Shopify Admin GraphQL API
- ShopifyQL
- Google Apps Script
- Google Sheets
- HTML
- CSS
- JavaScript

## What I learned

This project helped me combine e-commerce operations, automation, data analysis and front-end development.

I also learned how to design a public portfolio version without exposing private business data.

## Project status

- Product definition: complete
- Static prototype: complete
- Shopify connection: complete
- Data pipeline: complete
- Live dashboard: complete
- Portfolio privacy mode: complete
- Quality and hardening: complete
- Public portfolio version: complete

## Author

César Gaona

E-commerce · Automation · AI Product Building

## Source code in this repository

This repository contains the public Portfolio application and project documentation.

The private Shopify connection, credentials and raw business pipeline are intentionally not public.

See [`docs/PRIVACY.md`](docs/PRIVACY.md) for the privacy design.
