---
title: Quants Summary
draft: false
tags:
  - PECO103
date: 2024-09-28 09:05
---

# Hypothesis Testing

- Difference between sample statistic and population parameter
	- number that describes
	- variable (fixed), known (unknown)
	- common statistics: mean, SD, proportion, size
- What is population (in research)? ...and sample?
- General idea:
	- initial assumption ($H_0$)
	- collect evidence
	- based on available data, decide whether to accept/reject ($H_0$)
- Null ($H_0$): no relationship / is different
- Alternative ($H_1$): used in stat. inference contrary to $H_0$



| Types of Error | $H_0$ is false | $H_0$ is true |
| -------------- | -------------- | ------------- |
| Reject $H_0$   | correct        | Type $I$      |
| Accept $H_0$   | Type $II$      | correct       |

$$
P(\textrm{Type I error}) = \alpha
$$
$$
P(\textrm{Type II error}) = \beta
$$

P(reject $H_0$ when not true) = $1- \alpha$
P(accept $H_0$ when its true) = $1- \beta$  (Power of the test)
- Higher the power lower the probability of Type $II$ error.
- Power to accept the right thing when its true.


- Type $I$ = Producer’s risk, “I, as a producer rejected a good saying that it was faulty, when it was actually not. Loss for the producer.”
- Type $II$ = Consumer’s risk, “I, the consumer got a faulty product because the producer said that it was okay, when it was actually faulty”


## Steps

1. frame $H_0$ and $H_1$
2. collect data (sampling, appropriate, good representation)
3. perform statistical test (on the basis of data)
	- $t$-test, $\chi^2$-test, $z$-test, ANOVA test
4. Find the table value  for the given significance level $\alpha$ from the table.
5. Draw inferences based on the calculated and tabulated value of statistic.
	- If $z_{\textrm{calc}} \gt z_{\textrm{tab}}$  : reject $H_0$
	- If $z_{\textrm{calc}} \lt z_{\textrm{tab}}$  : don’t reject $H_0$


