---
title: Development
draft: false
tags:
  - EXAM5
date: 2024-09-21
---

> [!SUCCESS] GOAL: Estimate **Ultimate** values of premium and loss data

- Understand the environment (internal and external)
- There can be changes[^changes], understand them thoroughly
- Needs discussion!

> [!example]- Things to discuss with various departments of Insurer (CUDRI) #memo
> 
> This might be more applicable to **consulting actuaries**
> 
> - Claims
> 	- how do you handle unpaid claims?
> 	- did your reserving process change?
> - Underwriting
> 	- did the business composition change?
> 	- were there any large risks?
> - Data processing/accounting
> 	- how do you handle claim payments?
> 	- what do you do in case of partial payments?
> 	- how accurate are your data sources?
> - Ratemaking actuaries
> 	- why did you deviate from standard ratemaking procedures?
> 	- what data did you use?
> 	- what were the recent rate filings?
> - In-house actuaries
> 	- can I get the copy of the actuarial study held?
> 	- can I get more background on why did you select this (ratio)?

#todo Create a list of 3 questions to ask each executive from [[Friedland’s Reserving Book]]

# Development Triangles

- See the changes in claims data over time
- **age** and [[valuation date]]

Let’s first query the claims database and aggregate data by **accident year** (the year now is 2028)

## AY2024

- collect data for AY2024 in 12-month intervals
- a/o 2024-12-31 `ABC` paid $108M on all accidents (occurring from 2024-01-01)
	- age: 12 months
	- [[valuation date]]: 2024-12-31

| Accident Year | Cumulative Paid Claims by Age ($US Millions) |           |           |           |
| ------------- | -------------------------------------------- | --------- | --------- | --------- |
|               | 12 Months                                    | 24 Months | 36 Months | 48 Months |
| 2024          | 108                                          | 128       | 144       | 180       |

We are basically looking at the claims that happened in 2024 in their respective ages.

Now, we do the same for **AY2025**, **AY2026** and **AY2027** (we have data for every year). So, we get a triangle

|      | 12 Months | 24 Months | 36 Months | 48 Months |
| ---- | --------- | --------- | --------- | --------- |
| 2024 | 108       | 128       | 144       | 180       |
| 2025 | 100       | 121       | 152       |           |
| 2026 | 108       | 150       |           |           |
| 2027 | 112       |           |           |           |
`
That’s all! That’s the development triangle.

## Reading the Development Triangle

- If we want to look at all claims that happened a/o a specific year, let’s say 2027, then all we need to do is **read the upward sloping diagonal** 
	- which in this case are `112 150 152 180`
	- note that these are cumulative values, so summing them up will give us the total losses a/o a 2027

## Triangles that can be derived

- Incremental Paid claims:
	- Add up the CY paid for each transaction in the year
- Cumulative Paid Claims
	- Cumulatively add through a given year (from the previous result)
- Cumulative Reported Claims
	- Add Cumulative Paid claims + Year End Case Reserves
- Cumulative Reported Claim Count
	- Just count them
- Cumulative Closed Claim Count
	- Just invert it...

We can also perform [[Diagnostics using Development Triangles]]

# Developing Premiums

When to develop premiums?
- Incomplete year of data is used: (for [[Policy Year Analysis]])
	- [[Balance Responsiveness and Stability]]
	- written policy year takes longer to close
	- premium data for active policies have to be developed to ultimate[^develop_premiums]
	- **Method**: Study the historical pattern of premiums to estimate *mid-term* changes or cancellations on policy year premium
- LOB with [[Premium Audits]]:
	- the actual exposure for an insured is not known at the inception of the policy
	- thus, initial premium is charged then based on estimated exposure
	- once actual exposure is known, premium is adjusted

## Historical Patterns depend on several factors

#doubt
1. types of plans available from insurer
2. internal company policies
3. stability of historical relationship b/w estimated premium and audited premium.

## [[Calendar Year]] Data

- Premium development generally won’t be necessary
- Data at the end of CY is final.
- If **audit patterns** change, premium development on CY data can be justified.

# [[Chain Ladder Method]]



[^changes]: class of business written, policy provisions, claims management philosophy, social and economic environment
[^develop_premiums]: for newly written policies, the initial premium value is known but this value is subject to change do to a variety of reasons
	- changes in policy
	- cancellations in policy