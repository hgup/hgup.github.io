---
title: Dynamic Stability
draft: false
tags:
  - PECO101
date: 2024-10-03 13:31
---

> [!example] Revise
>  From [[Difference Equations]] we know that
>   $$ y_t = ay_{t-1} + b  $$
>    has the solution,
>    $$
>    y_t = \left(y_0 - \dfrac{b}{1-a}\right)a^t + \dfrac{b}{1-a}; \qquad b\neq 1
> $$

Let the demand function be $D_t = aP_t + b$ and,
the supply function be $S_t = AP_{t-1} + B$.

For the equilibrium, $D_t = S_t$
$$
\begin{align*}
aP_t + b &= AP_{t-1} + B\\
\implies P_t\qquad &= \dfrac{A}{a}P_{t-1} + \left(\dfrac{B-b}{a}\right)\\
\end{align*}
$$
which gives us the solution as
$$
\begin{align*}
P_t &= \left(P_0- \dfrac{\dfrac{B-b}{a}}{1-\dfrac{A}{a}}\right)\left(\dfrac{A}{a}\right)^{t} + \dfrac{\dfrac{B-b}{a}}{1-\dfrac{A}{a}} \\
\tag{1}
P_t &= \left(P_0- \dfrac{B-b}{a-A}\right)\left(\dfrac{A}{a}\right)^{t} + \dfrac{B-b}{a-A} \\
\end{align*}
$$

Suppose $P_e$ is the equilibrium price then,
$$
\begin{align*}
aP_e + b &= AP_e + B\\
\tag{2}
\therefore\qquad P_e &= \dfrac{B-b}{a-A}
\end{align*}
$$

From $(1)$ and $(2)$ we infer that,
$$
\begin{align*}
\tag{3}
P_t &= \left(P_0 - P_e\right)\left(\dfrac{A}{a}\right)^t + P_e\\
\tag{4}
\therefore\quad P_t -P_e &= \left(P_0 - P_e\right)\left(\frac{A}{a}\right)^t\\
\end{align*}
$$

If the initial price is the equilibrium price (i.e. $P_0 = P_e$), then there is no disturbance in equilibrium, thus we have dynamic stability.

If the initial price is not the equilibrium price ($P_0 \neq P_e$)  then $P_t \neq P_e$ and the difference is given by the equation
$$
\boxed{P_t -P_e = \left(P_0 - P_e\right)\left(\frac{A}{a}\right)^t}
$$

Now, let’s look at some cases
### Case 1: Slope(supply) < Slope(demand)

> Suppose $\left|\dfrac{A}{a}\right| \lt 1$, then $\left(\dfrac{A}{a}\right)^t\to 0$  as $t\to \infty$.

Due to damped oscillation[^1], there will be dynamic stability as $P_t$ will slowly converge to $P_e$.

### Case 2: Slope(supply) > Slope(demand)

> Suppose $\left|\dfrac{A}{a}\right| \gt 1$, then $\left(\dfrac{A}{a}\right)^t\to \infty$  as $t\to \infty$.

This leads to explosive oscillation, and $\therefore$  this leads to unstable equilibrium.
### Case 3: Slope(supply) = Slope(demand)

> Suppose $\left|\dfrac{A}{a}\right| = 1$, then $\left(\dfrac{A}{a}\right)^t\to 1$  as $t\to 1$.

The oscillation will be of equal magnitude and equilibrium will be unstable.

Refer to the [[Cob-web Market Model]]

![[Cob-web Market Model#^5021fd]]

## Conclusion

Thus only when $\dfrac{A}{a} \lt 1$, in the first case, there will b dynamic stability. This model is called the [[Cob-web Market Model]][^2]
[^1]: ![[Pasted image 20241003135551.png]]Damped Oscillation
[^2]: ![Cob-web](https://images.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg?cs=srgb&dl=pexels-pixabay-34225.jpg&fm=jpg) Why is it called the cob-web model? That’s why.