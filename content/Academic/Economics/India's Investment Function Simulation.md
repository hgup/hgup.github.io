---
title: India's Investment Function Simulation
draft: false
tags:
  - PECO102
date: 2024-09-24 08:09
---
# Background work
## Hints and Tips

### Investments Depends on:

- inflation
- interest rates
- growth rate

### Regarding data

- All variables should be in the same scale. (current or constant)
- prefer constant prices
- give a disclaimer for any proxies and if we used at current prices that we are using
	- due to unavailability of data
- IIP is a proxy for GDP (but doesn’t contain all, only 17 major industries) for monthly data.
## Macroeconomic Indicators

- **GDP:** Gross Domestic Product provides a measure of overall economic activity.  
- **Investment Rates:** Data on investment as a percentage of GDP indicates the level of capital expenditure in the economy.
- **Savings Rates:** High savings rates often correlate with increased investment potential.
- **Inflation:** High inflation can erode the purchasing power of investments.  
- **Interest Rates:** Interest rates influence the cost of borrowing and can impact investment decisions.
### notes

- gross fixed capital formation
	- interest rates
		- call money rate
	- inflation
	- market capitalization (have to calculate) (proxy: equity price
- WPI and CPI
	- CPI for IW

## Regex for extracting data

Useful regex
```regex
(?<!\d{3,3}\ +)(?<=\ )\d{3,3}(?=\ )(?=\ +\d{3,3})
```
First row of data

For GFCF
```regex
(?<=^\d{4}-\d{2}\ +)[0-9.]+
```

- we will need to do a little bit of [[Base Shifting]]

# Data

Period: 1979 to 2023
## Target Variable

**Gross Fixed Capital Formation (GFCF)** is the total investment in fixed assets within an economy over a given period. It includes capital goods like machinery, equipment, and buildings.
- It measures the growth potential of an economy as higher GFCF indicates increased productive capacity
- Variable: *Public and Private investments*
- Data used: [HBS Table No. 02 _ Macro Economic Aggregates (at Constant Prices)](https://data.rbi.org.in/DBIE/#/dbie/reports/Publication/Time-Series%20Publications/Handbook%20of%20Statistics%20on%20the%20Indian%20Economy/PART%20I%20:%20ANNUAL%20SERIES/NATIONAL%20INCOME,%20SAVING%20AND%20EMPLOYMENT)

## Explanatory Variables

**Gross Domestic Product (GDP)** is the total market value of all final goods and services produced within a country's borders in a given period.
- It is considered the most comprehensive measure of a country's economic activity and is widely used to gauge its overall economic health and performance.
- Variable: *Growth*
- Data used: [HBS Table No. 02 _ Macro Economic Aggregates (at Constant Prices)](https://data.rbi.org.in/DBIE/#/dbie/reports/Publication/Time-Series%20Publications/Handbook%20of%20Statistics%20on%20the%20Indian%20Economy/PART%20I%20:%20ANNUAL%20SERIES/OUTPUT%20AND%20PRICES)

**Call Money Rate** is the interest rate charged by commercial banks to other banks for short-term loans, typically overnight.

-  It's a key indicator of liquidity in the money market. A high call money rate suggests tight liquidity, while a low rate indicates ample liquidity.
- Variable: *Interest Rates*
- Data used: [HBS Table No. 62 _ Structure of Interest Rates](https://data.rbi.org.in/DBIE/#/dbie/reports/Publication/Time-Series%20Publications/Handbook%20of%20Statistics%20on%20the%20Indian%20Economy/PART%20I%20:%20ANNUAL%20SERIES/FINANCIAL%20MARKETS)

**Market Capitalization** is the total market value of a company's outstanding shares of stock. It is calculated by multiplying the number of shares by the current market price per share.

- It reflects the overall value of a company and is often used to assess its size and financial health.
- Variable: *Share Prices*
- Data used: [HBS Table No. 91 _ Annual Averages of Share Price Indices and Market Capitalisation](https://data.rbi.org.in/DBIE/#/dbie/reports/Publication/Time-Series%20Publications/Handbook%20of%20Statistics%20on%20the%20Indian%20Economy/PART%20I%20:%20ANNUAL%20SERIES/FINANCIAL%20MARKETS)

**Consumer Price Index (CPI)** is a measure of the average change in prices paid by consumers for a basket of goods and services over time.

- It is used to track inflation, which is the sustained increase in the general price level of goods and services in an economy.
- Variable: *Inflation*
- Data used: [HBS Table No. 37 _ Consumer Price Index - Annual Average](https://data.rbi.org.in/DBIE/#/dbie/reports/Publication/Time-Series%20Publications/Handbook%20of%20Statistics%20on%20the%20Indian%20Economy/PART%20I%20:%20ANNUAL%20SERIES/OUTPUT%20AND%20PRICES) (Indexed to: Base Year 1960)

## About the Data

- The research period is from 1979 to 2023 (because of data availability)
- Currencies are at constant prices (INR crores.)
- The base Year was set to 2011-12 for all Indices (as GDP data was adjusted according to this base year)

# Methodology

- Since there is high multicollinearity in the data and this is a time series data, we know that there is a very significant effect of trending here.
- Suggestion was to use the first difference of the data to eliminate the trend and [[unit root test]]