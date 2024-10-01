---
title: Collusion Model
draft: false
tags:
  - PECO101
date: 2024-09-23T10:15:00
---
# 2. Collusion Solution

In this model, the [[duopolist]] collide with each other and try tom maximize the total profit instead of individual profit, then, they will distribute the profit among themselves according to the output which they produce.

Thus, this will maximize $\Pi = \Pi_1 + \Pi_2$
$$
= R_1 - C_1 + R_2 - C_2
$$

w.r.t $q_1$ and $q_2$ for which [[First Order Condition|F.O.C]] are

$$
\dfrac{\partial{\Pi}}{\partial{q_1}} = 0 \qquad
\dfrac{\partial{\Pi}}{\partial{q_2}} = 0
$$
Solving them, we get individual output $q_1$ and $q_2$ and from which we get individual profits $\Pi_1$ and $\Pi_2$.

$$
\begin{align*}
\Pi_1 &= 100q_1 - 0.5q_1(q_1 + q_2) - 5q_1\\
\Pi_2 &= 100q_2 - 0.5q_2(q_1 + q_2) - 0.5q_2^2\\
\Pi = \Pi_1 + \Pi_2 &= 100(q_1+q_2) - 0.5(q_1+q_2)^2 - 5q_1 - 0.5q_2^2
\end{align*}
$$

$\therefore$ [[First Order Condition|F.O.C]]

$$
\dfrac{\partial{\Pi}}{\partial{q_1}} = 0 \qquad
\dfrac{\partial{\Pi}}{\partial{q_2}} = 0
$$

$$
\begin{align*}
&100 - (q_1 + q_2) - 5 \\
\tag{1}
\implies&q_1 + q_2 = 95\\
\\
&100 - (q_1 + q_2) - q_2 = 0\\
\tag{2}
\implies&q_1 + 2q_2 = 100\\
\end{align*}
$$

From (1) and (2), we get $q_2 = 5$ and $\therefore q_1 = 90$

Now, we calculate the profits:

$$
\begin{align*}
P &= 100 - 0.5 \times 95 &= 52.5\\
\Pi_1 &= 52.5 \times 90 - 5 \times 90 &= 4275\\
\Pi_2 &= 52.5 \times 5 - 0.5 \times 25 &= 250\\
\end{align*}
$$

```math-tex
P = 100 - 0.5(95)
q1 = 90
q2 = 5
P1 = P*q1 - 5q1
P2 = P*q2 - 0.5q2^2
```

