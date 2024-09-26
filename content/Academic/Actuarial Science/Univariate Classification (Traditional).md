---
title: Univariate Classification (Traditional)
draft: false
tags:
  - EXAM5
date: 2024-09-25 14:47
---
Univariate classification takes the effect of each variable independently and ignores the plausible interactions and correlations that may exist between them.

# Data
## Exposure Premium and Loss Data

| Amount of Insurance (AOI) | Territory | Exposure | Loss & ALAE | Premium @ Current Rate Level |
| ------------------------- | --------- | -------- | ----------- | ---------------------------- |
| Low                       | 1         | 10       | $303.55     | $567.60                      |
| Medium                    | 1         | 110      | $4,586.67   | $7,804.50                    |
| High                      | 1         | 180      | $10,807.86  | $17,368.56                   |
| Low                       | 2         | 130      | $6,416.59   | $12,298.00                   |
| Medium                    | 2         | 120      | $8,136.00   | $14,190.00                   |
| High                      | 2         | 140      | $13,668.48  | $22,514.80                   |
| Low                       | 3         | 150      | $9,165.85   | $18,447.00                   |
| Medium                    | 3         | 120      | $10,072.37  | $18,447.00                   |
| High                      | 3         | 40       | $4,834.74   | $8,362.64                    |
| **TOTAL**<br>             |           | 1,000    | $67,992.11  | $120,000.10                  |
## Underlying Loss Cost Relativities for the two variables

| AOI           | True Relativity | Charged Relativity |
| ------------- | --------------- | ------------------ |
| Low           | 0.728           | 0.800              |
| Medium (base) | 1.000           | 1.000              |
| High          | 1.440           | 1.360              |

| Territory | True Relativity | Charged Relativity |
| --------- | --------------- | ------------------ |
| 1         | 0.615           | 0.600              |
| 2 (base)  | 1.000           | 1.000              |
| 3<br>     | 1.238           | 1.300              |

Variable expense provision $V = 25\%$ and target profit $Q_T = 5\%$.

> [!WARNING] We assume that the variable expense provision and profit margin are the same for all risk levels, which may not be true. In the alternate case, we must adjust it like so:
> 1. **Pure Premium Method**: adjust pure premiums for each level before calculating the rate relativities


# Methods

There are three traditional univariate methods:
## Pure Premium Approach

> [!tldr] Compare expected pure premiums for each of the levels within a rating variable

> [!question]- Do I need to trend the losses? (4 points)
> 
> 1. stable portfolio + short-tailed LOB -> Nada
> 2. growing/shrinking portfolios (or changing loss+ALAE dist.) -> Apply aggregate trend and [[Cumulative Claim Development Factors|Age-to-ultimate Development Factors]] to the loss+ALAE of individual years
> 3. long-tailed LOB (risk classes with varying trend)[^long-tailed] -> Adjustment to individual risks / levels
> 4. multiple claim types -> apply trending and development for each claim types separately

> [!Important] Also, adjust data for cat losses

| Territory | Exposures | Loss & ALAE | Indicated Pure Premium | Indicated Relativity | Indicated Relativity to Base |
| --------- | --------- | ----------- | ---------------------- | -------------------- | ---------------------------- |
| 1         | 300       | $15,698.08  | $52.33                 | 0.7696               | 0.7231                       |
| 2         | 390       | $28,221.07  | $72.36                 | 1.0643               | 1.0000                       |
| 3         | 310       | $24,072.96  | $77.65                 | 1.1421               | 1.0731                       |
|           | 1,000     | $67,992.11  | $67.99                 | 1.0000               | 0.9396                       |

So, finally you need to just divide everything by the overall indicated pure premium to be able to see which group are above average or below average, and how much more or less of the total average loss should they pay?
## [[Loss Ratio]] Approach

We compare loss ratios instead. So basically, we just need to calculate [[Loss Ratio|LR]] for each of the risk groups and the aggregate risk groups

The same process literally.

### LR is better, but why?

[[Loss Ratio|LR]] approach gives a closer estimate to the true *territory rate relative value* than the [[Pure Premium]] approach, because we use **current Premium** as the denominator for the former, which helps us eliminate distributional bias in the other rating variable, *AOI*.




[^long-tailed]: #doubt 