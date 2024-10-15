---
title: Welfare Economics
draft: false
tags:
  - PECO101
date: 2024-10-15 09:19
---
The objective of welfare economics is the evaluation of the desirability of various alternative economic states from the society’s point of view.

- An economic state means a particular arrangement of various economic activities and resources of the economy.
- When different allocations are possible, it is important to know whether a particular allocation is desirable or not. Such desirability must be evaluated from the point of view of welfare of the society as a whole which depends on the individual levels of satisfaction of all the consumers of society, but any alternative may have favorable effects on some people and unfavorable effects on others, so the question arises as what is a **wise choice**. This question is answered to some extent by the welfare condition of the society. This welfare of society is defined and analyzed by various economists. now, we will touch upon two such important cases:

## Pareto’s Optimality Theory

- An allocation is pareto optimal or pareto efficient if production and idstribution cannot be reorganized to increase utility of one or more individuals without decreasing utility of others.
- An allocation is said to be pareto superior to another allocation if the utility of at least one individual is higher and utility of none is lower in this allocation

> [!NOTE] 
> This doesn’t mean superiority is optimality because there may be a better allocation than the superior one.

## Pareto Optimality in Consumption

Pareto Optimality in Consumption can be acquired if each consumer can maximize its utility without disturbing the utility levels of other consumers.

Consider a two commodity, two consumer model

Let $u_1(q_{11},q_{12})$ and $u_2(q_{21},q_{22})$ be the utility function of consumer[^1]

Let $q_{11} + q_{21} = q_1^\circ$ and  $q_{21} + q_{22} = q_2^\circ$ be the total availability of commodities

Let $u_2 = u_2^0$ be the utility level  enjoyed by the second consumer

$\therefore$ one must maximize his utility subject to the condition $u_2 = u_2^\circ$.

For this, the Lagrange function is given by

$$
L = u_1(q_{11},q_{12}) + \lambda(u_2 - u_2^\circ) = u_1(q_{11},q_{12}) + \lambda\left[u_2(q_1^\circ - q_{11}, q_2^\circ - q_{12}) - u_2^\circ\right]
$$
$$
\begin{align*}
\tag1
\dfrac{\partial{L}}{\partial{q_{11}}} = \dfrac{\partial u_1}{\partial q_{11}} + \lambda \cdot \dfrac{\partial u_2}{\partial q_{11}}(-1) = 0\\
\tag2
\dfrac{\partial{L}}{\partial{q_{12}}} = \dfrac{\partial u_1}{\partial q_{12}} + \lambda \cdot \dfrac{\partial u_2}{\partial q_{12}}(-1) = 0\\
\end{align*}
$$

Divide (1) and (2) to cancel out $\lambda$, we get:

$$
\begin{align*}
\dfrac{\dfrac{\partial{u_1}}{\partial{q_{11}}}}{\dfrac{\partial{u_1}}{\partial{q_{12}}}} &= \dfrac{\dfrac{\partial{u_2}}{\partial{q_{11}}}}{\dfrac{\partial{u_2}}{\partial{q_{11}}}}\\\\

\verb|MRCS of I| &= \verb|MRCS of II|

\end{align*}
$$
MRCS of both consumers must be equal. This can be executed to the extended to $n$ commodities and $n$ consumers

![[Welfare Economics 2024-10-15 09.48.34.excalidraw]]

## Pareto Optimality in Production
Suppose there are two producers using two inputs to produce two outputs with production function given by 

$$
q_1 = f_1(x_{11}, x_{12})\qquad;\qquad q_2 = f_2(x_{21},x_{22})
$$

where
$$
x_{11} + x_{21} = x_1^\circ \qquad;\qquad x_{12} + x_{22} = x_2^\circ
$$

are the available input quantities and $q_1$ and $q_2$ are outputs. Just like the consumption here also we can show that[^2] 

$\boxed{\textrm{MRTS}_1 = \textrm{MRTS}_2}$  is the condition for pareto optimality condition on production.

## Pareto optimality in General
Consider an economy where there are $m$ consumers, $N$ producers, $n$ primary factors and $s$ produced goods.

The condition for pareto optimality can be written in terms of various marginal rates of substitutions as follows:

1. The MRCS for all consumers and MRPT for all producers must be equal for every pair of produced good
2. The MRCS for all consumers and MRTS for all producers must be equal for ever pair of primary factors
3. The consumers MRCS between factor and goods must be equal to corresponding rates of the producers who will transfer factors into commodities i.e. the marginal products.

[^1]: In this notation $q_{ij}$, $i$ is the consumer, $j$ is the commodity
[^2]: To show this we need to use the Lagrange function

$$
L = f_1(x_{11},x_{12}) + \lambda(f_2 - f_2^\circ) = f_1(x_{11},x_{12}) + \lambda\left[f_2(x_1^\circ - x_{11}, x_2^\circ - x_{12}) - f_2^\circ\right]
$$