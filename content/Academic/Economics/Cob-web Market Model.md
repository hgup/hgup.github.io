---
title: Cob-web Market Model
draft: false
tags:
  - PECO103
date: 2024-09-25 09:10
---
- Nicholas coined this term in 1934
- It is an economic model, that explains cyclical supply and demand, in a market where the amount produced must be decided before prices are observed. For example, it is common in certain types of markets, where there is a periodic fluctuation of certain commodities. [[Agricultural markets]] are a context where the [[Cob-web Market Model]] may apply.
- In [[Cob-web Market Model|Cob-web market]] situation,
	1. the output decision of a producer depends on the price of previous period.
	2. the demand for production depends on the price of current period
- $\therefore$ In [[Cob-web Market Model]],
  $$
  \begin{align*}
  \tag1
  Q_d &= \alpha - \beta P_t \qquad&[\alpha,\beta > 0]\\
  \tag2
  Q_s &= - \gamma + \delta P_{t-1} &[\gamma,\delta > 0]\\
  \end{align*}
  $$
 where, $Q_d$ is quantity demanded, $Q_s$ is Quantity supplied.
 $\beta =$ slope of demand function
 $\delta =$ slope of supply function
 
 Equating $Q_d = Q_s$ we get
 $$
 \begin{align*}
 7\alpha - \beta P_t &= -\gamma + \delta P_{t-1}\\
 -\beta P_t - \delta P_{t-1}&= -\gamma  - \alpha\\
 -\left(\beta P_t + \gamma P_{t-1}\right) &= - (\alpha + \gamma)\\
 \beta P_t &= -\delta P_{t-1} + (\alpha + \gamma)\\
 P_t &= -\dfrac{\delta}{\beta}P_{t-1} + \left(\dfrac{\alpha + \gamma}{\beta}\right)
 \end{align*}
 $$
 Let $b = -\dfrac{\delta}{\beta}$ and $a = \dfrac{\alpha+\gamma}{\beta}$
$$
\tag3
 P_t = -b P_{t-1} + a
 $$ 
So, (3) is a [[First Order Linear Difference Equation|FOLDE]] and thus, the general solution for (3) is,
$$
\begin{align*}
P_t &= \left(P_0 - \dfrac{a}{1-b}\right)b^t + \dfrac{a}{1-b}\\
P_t &= \left(P_0 - \dfrac{\dfrac{\alpha+\gamma}{\beta}}{1-\left(-\dfrac{\delta}{\beta}\right)}\right)\left(-\dfrac{\gamma}{\beta}\right)^t + \dfrac{\dfrac{\alpha+\gamma}{\beta}}{1-\left(-\dfrac{\gamma}{\beta}\right)}\\
P_t &= \left(P_0 - \dfrac{\dfrac{\alpha+\gamma}{\cancel\beta}}{\dfrac{\beta+ \delta}{\cancel\beta}}\right)\left(-\dfrac{\gamma}{\beta}\right)^t + \dfrac{\dfrac{\alpha+\gamma}{\cancel\beta}}{\dfrac{\beta + \delta}{\cancel\beta}}\\
\tag4
P_t &= \left(P_0 - \dfrac{\alpha + \gamma}{\beta +\delta}\right)\left(-\dfrac{\gamma}{\beta}\right)^t + \dfrac{\alpha + \gamma}{\beta +\delta}
\end{align*}
$$
Since, $P_e = \dfrac{\alpha + \gamma}{\beta + \delta}$  is the inter-temporal equilibrium price. We ,write equation (4) is the [[time path]] of the [[Cob-web Market Model]]. Here, $P_0$ is the initial price and $P_e$ is the inter-temporal equilibrium price across time.

Now, the nature of the [[time path]] depends on $\dfrac{\delta}{\beta}$, i.e. ratio of slope of supply curve, $\delta$ and slope of demand curve, $\beta$.

There are three cases:


| S.No. | Case                                                                       | Graph                                                    |
| ----- | -------------------------------------------------------------------------- | -------------------------------------------------------- |
| $I$   | $\left\|\dfrac{\delta}{\beta}\right\| \lt 1$ $;\quad\delta \lt \beta$.     | ![[Cob-web Market Model 2024-09-25 09.41.32.excalidraw]] |
| $II$  | <br>$\left\|\dfrac{\delta}{\beta}\right\| \gt 1$ $;\quad\delta \gt \beta$. | ![[Cob-web Market Model 2024-09-25 09.53.29.excalidraw]] |
| $III$ | <br>$\left\|\dfrac{\delta}{\beta}\right\| = 1$ $;\quad\delta = \beta$.     | ![[Cob-web Market Model 2024-09-25 09.54.56.excalidraw]] |

^5021fd

1. The time path is convergent and the market is dynamically stable.
2. The current path $P_t$ will diverge more from the equilibrium price. The [[time path]] is divergent and the market is not dynamically stable
3. In equation (4), the difference between $P_t$ and $P_e$ will remain same