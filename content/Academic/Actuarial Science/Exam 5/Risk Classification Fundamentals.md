---
title: Risk Classification Fundamentals
draft: false
tags:
  - EXAM5
date: 2024-09-21
---
# Importance of Equitable Rates

Understand this with an example:
1. There are two companies $A$ and $B$
2. Insured population: 10,000 high risk & 10,000 low risk
3. High risk, `HR` cost -> \$300/yr; Low risk `LR` cost -> \$200/yr

Both $A$ and $B$ have 5000 high risk and 5000 low risk individuals each.

$A$ follows rates (\$300 to `HR` and \$200 to `LR`). But $B$ charges \$250 to both.

10% of the insureds shop at renewal and base the choice on price.

Fundamental flaw in $B$’s approach:
- $B$ gets a profit of \$50 from each `HR` individual, and a loss of \$50 from each `LR` individual. Since, they are equal in number the net result is \$0.
- So, \$50 is being subsidized by the `LR` for the `HR`.
- `LR` will want better rates so the 10% of them who will shop at renewal will move out to company $A$ (because its cheaper \$200 for them).
- `HR` from company $B$ will see a better price in $A$ (\$300 vs \$250) and thus 10% of them will move to company $B$.
- Hence, their 

|      | Number of insureds | True expected Risk | Total Cost | Collected Premium | Net Profit/Loss |
| ---- | ------------------ | ------------------ | ---------- | ----------------- | --------------- |
| `LR` | 4500               | 200                | 900000     | 1125000           | 225000          |
| `HR` | 5500               | 300                | 1650000    | 1375000           | -275000         |
|      |                    |                    |            | Net Loss          | 500000          |
```math-tex
lr_B_cost = 200*4500
lr_B_premium = 250*4500
hr_B_cost = 5500*300
hr_B_premium = 5500*250

hr_B_profit = hr_B_premium - hr_B_cost
lr_B_profit = lr_B_premium - lr_B_cost

net = lr_B_profit - hr_B_profit 
```

So, the risky part of the business mix gets absorbed to $B$. On the other hand, $A$ is experiencing favorable selection and so `LR` people move out from $B$ to $A$.

This is because the profit from **over-charging** `LR` is not sufficient to cover for the loss costs of **under-charging** the `HR`.

## Competitive Advantage
### Adverse Selection

- downward Spiral of Insurer B because of not following equitable rates for each insurer.
- high risk insureds get absorbed in Insurance company B and low risk insureds leave

### continues till...

1. segment in a more redefined manner
2. become insolvent
3. specializes in insuring high-risk insureds only

### Favorable Selection

- company A benefits by adding a new rating variable to differentiate and attract low risk insured leading to more profitable insureds in the company

> [!tip] The process of charging lower rates to low-risk insureds and attracting them is called [[skimming the cream]]

# Criteria for Evaluating Rating Variables


> [!example] #pneumonic Criteria for evaluating rating variables - SOS334
> 

## Statistical

| Criteria                 | Meaning                                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Statistical Significance | - different levels of rating variables should have **different** levels of expected costs<br>- the perceived difference in statistical costs should be **statistically significant** and stable (over time) |
| Homogeneity              | - similar risks => similar expected costs<br>-️ if the group contains dissimilar risk profiles, it needs to be subdivided.                                                                                  |
| Credibility              | - each level of risk should have sufficient data                                                                                                                                                            |

[[Balance Homogeneity and Credibility]]

## Operational

1. **Objective**: clear, objective measurable. Free from personal subjectivity (e.g. '“Following traffic rules” is not objective, but “Miles driven” is objective)
2. **Inexpensive** to administer: cost to classify risk should not outweigh potential benefits
3. **Verifiable**: shouldn’t be easily manipulated and verifiable

## Social

1. **Objective**: should be affordable for all risks[^1]. Increase subsidies or offer less coverage to `HR` individuals.
2. **Causality**: show the cause-and-effect relationship to the public, then they will accept it.
> [!example]- Should you use zip-code for automobile insurance?
> **No!**
> - Automobile insurance is activated if a person who drives recklessly gets into an accident
> - How is that connected to the place where he drives the car?
> - It’s like saying everyone who drives there will get into an accident which is absurd
> - There is no direct common link of cause of accident to zip code.
3.  **Controllability**: Policy-holders should have some bit of control to decide which risk group they belong to.[^2]
4. **Privacy Concerns**: Should not infringe privacy of the insured.


[^1]: Especially when mandated by law, else would be unfair
[^2]: Rather than sealing their fate and leaving them helpless, allow them to take some steps that encourages safety and reward them for that.