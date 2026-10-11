# Case Study — E-commerce Command Center

## Project summary

I wanted to build a real project that could help an e-commerce team understand the business faster.

The idea was simple: connect Shopify data, organize it and show the most useful information in one dashboard.

The final result is an E-commerce Command Center with private and public modes.

## The challenge

E-commerce data can be difficult to manage because sales, orders, inventory, products and operations are not always easy to review together.

A person can spend too much time opening reports, checking different pages and comparing information manually.

The goal was to reduce this work and create one clear operational view.

## My solution

I created a data pipeline with Shopify, Google Apps Script and Google Sheets.

The system collects and prepares different types of information, including:

- Sales
- Orders
- Sessions
- Conversion
- Products
- Inventory
- Fulfillment
- Refunds
- Cancellations

Then the dashboard organizes this information into five views:

1. Overview
2. Sales
3. Products
4. Inventory
5. Operations

## Why I used ShopifyQL and the Admin API

I used ShopifyQL for official analytics metrics such as sales, orders, AOV, sessions and conversion.

I used the Shopify Admin API for operational information such as products, variants, inventory and fulfillment.

This combination gives the dashboard both business analytics and operational data.

## Automation

The data pipeline runs automatically.

Orders use incremental updates, so the system does not need to download all historical orders every time.

Products, inventory and analytics use different refresh intervals based on how often the information needs to change.

This makes the system faster and more efficient.

## Portfolio privacy

A very important part of the project was privacy.

I wanted to show the project publicly, but I did not want to expose private business data.

For this reason, I created a Portfolio Mode.

The Portfolio Mode is prepared on the server before the browser receives the information.

The public version hides real commercial values and uses anonymized product labels such as Product 1, Product 2 and Product 3.

The public application is also separated from the private application.

This means the public project does not have access to Real Mode.

## Quality and validation

Before the public release, I added automated checks for:

- Data freshness
- Pipeline status
- Analytics integrity
- Scheduled triggers
- Privacy rules
- Dashboard endpoints
- Monthly target configuration
- Web App deployment

The final quality test passed all checks without warnings or failures.

## Result

The final project is a working e-commerce dashboard connected to real operational data.

It can help a team understand sales, products, inventory and operations in one place.

It also includes a safe public version that I can use in my portfolio.

## Skills demonstrated

This project shows experience in:

- Shopify
- E-commerce operations
- API integration
- Google Apps Script
- Data pipelines
- Automation
- Data analysis
- Dashboard design
- JavaScript
- HTML and CSS
- Data privacy
- Product thinking

## What I would improve next

The next possible steps are:

- Use a custom domain
- Move the public front-end to a dedicated hosting platform
- Add more advanced alerts
- Add more historical comparisons
- Add more automated business insights
