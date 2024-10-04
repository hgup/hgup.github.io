---
title: India's Investment Function Simulation
draft: false
tags: 
date: 2024-09-24 08:09
---
Depends on:
- inflation
- interest rates
- growth rate

all variables should be in the same scale. (current or constant)

- prefer constant prices
- give a disclaimer for any proxies and if we used at current prices that we are using
	- due to unavailability of data

IIP is a proxy for GDP (but doesn’t contain all, only 17 major industries) for monthly data.

### Macroeconomic Indicators

- **GDP:** Gross Domestic Product provides a measure of overall economic activity.  
    
- **Investment Rates:** Data on investment as a percentage of GDP indicates the level of capital expenditure in the economy.
- **Savings Rates:** High savings rates often correlate with increased investment potential.
- **Inflation:** High inflation can erode the purchasing power of investments.  
    
- **Interest Rates:** Interest rates influence the cost of borrowing and can impact investment decisions.


- gross fixed capital formation

	- interest rates
		- call money rate
	- inflation
	- market capitalization (have to calculate) (proxy: equity price
- WPI and CPI (end o fthe page)
	- CPI for IW

Useful regex
```
(?<!\d{3,3}\ +)(?<=\ )\d{3,3}(?=\ )(?=\ +\d{3,3})
```
First row of data


- we will need to do a little bit of [[Base Shifting]]