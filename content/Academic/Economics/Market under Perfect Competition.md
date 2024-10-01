---
title: Market under Perfect Competition
draft: false
tags:
  - PECO101
date: 2024-09-30 13:24
---
# Aggregate Demand & Aggregate Supply[^1]

### Aggregate Demand

Consider the market for a single commodity, the demand of commodity comes from various consumers. *Each* consumer will decide his demand $D_i\  (i=1,\dots n)$ according to his utility maximizing condition. So if $P$ is the **price** of the commodity. Then demand, $D_i = D_i(P)$ is a function of price. So, **aggregate demand** is a *sum of all the individual demands*.
$$
D = \sum_{i=1}^{n}D_i(P)
$$

### Aggregate Supply

The supply of a commodity comes from *individual* firms producing their commodity. Suppose there are $m$ firms in the industry, the supply comes from each of these firms, is according to its profit maximizing condition, $MC_i = P$[^2]. If price is more than the minimum average variable cost **AVC**, then only the firm will supply the quantity $S_i$[^3], which is a solution of $MC_i = P$ otherwise the firm is not going to supply anything, since the firm will not be able to meet the AVC. 


> [!Question]-  Suppose there are 100 firms in the industry, the cost function $C_i = 0.1q_i^3 - 2q_i^2+15q_i + 10$. Find the individual supply and the market supply.
> 
> - Know that $0.1q_i^3 - 2q_i^2+15q_i$ is the AVC and $10$ is the fixed cost.
> - $MC_i$ = $0.3q_i^2 - 4q_i + 15$.
> - So each of the firms will try to maximize their profits by deciding their supply using $MC_i = P$.

**We first derive the supply function of this individual firm**.
We get a quadratic equation with a = 0.3, b = -4, c = (15 - P). On solving which we get the roots as,

$$
\begin{align*}
q_i &= \dfrac{4 \pm\sqrt{16-4\times0.3\times(15-P)}}{0.6}\\
q_i &=  \dfrac{4 \pm\sqrt{16-1.2(15-P)}}{0.6}\\
q_i &=  \boxed{\dfrac{4 \pm\sqrt{1.2P-2}}{0.6}}\\
\end{align*}
$$
```math-tex
16 - 1.2*15
```

**Now we find the $q_i$ that minimizes the AVC**
Now, we would like to find the optimal value of **AVC**, which is $\dfrac{VC}{q} = \dfrac{\partial\text{AVC}}{\partial{q_i}}$.
$$
\begin{align*}
\dfrac{\partial\text{AVC}}{\partial{q_i}} &= \dfrac{\partial(0.1q_i^2 - 2q_i + 15)}{\partial q_i}\\
&= 0.2q_i - 2 = 0\\\\
\implies q_i &= 10
\end{align*}
$$









[^1]: A.k.a Market demand and market supply
[^2]: ![[Market under Perfect Competition 2024-09-30 13.49.53.excalidraw.light.svg]]
[^3]: $i^{th}$ firm supplies $S_i$