---
title: Quasi-Competitive Solution
draft: false
tags:
  - PECO101
date: 2024-09-21T00:10:00
---
# 1. Quasi-Competitive Solution

The market demand of the output of duopolist is a function determined by the total output of both the duopolists. Thus demand function is

$$
P = F(q_1 = q_2)\qquad\textrm{where}\quad q_1\quad \& \quad q_2 \quad \textrm{are output of duopolist}
$$

The revenues of the duopolists are given by
$$
\begin{align*}
R_1 = p\cdot q_1 &= F(q_1+q_2)q_1\\
&=R_1(q_1,q_2)
\end{align*}
$$
$$
\begin{align*}
R_2 = p\cdot q_2 &= F(q_1+q_2)q_2\\
&=R_2(q_1,q_2)
\end{align*}
$$

Let $c_1(q_1)$ and $c_2(q_2)$ be the cost function:

Then profits are given by

$$
\begin{align*}
\Pi_1 = R_1 -c_1(q_1)\\
\Pi_2 = R_2 -c_2(q_2)
\end{align*}
$$

Here, the basic assumption is that each duopolist **maximizes** its profit by following the **competitive rule** $MC =P$

$$
\therefore\qquad P=F(q_1+q_2)=c_1'(q_1)
$$
$$
\qquad P=F(q_1+q_2)=c_2'(q_2)
$$
By solving these equations, we get $q_1$ and $q_2$.

Substituting them in demand function we get the Price. Upon substitution of quantity in the cost function, we can finally calculate the profits of the firms. This model is called quasi-competitive solution since they are relevant in competition and also monopoly in the behavior of Duopolist.

### For example

$P = 100 - 0.5[q_1 + q_2]$ be the demand function
Let $c_1 = 5q_1$ ;$\quad c_2 = 0.5q_2^2$ be the cost function


> [!QUESTION]- Find the Max profit for both duopolists
> Hint:  use $MC=P$ to find $q_1$ and $q_2$ then use $R$ and $c$ to find $\Pi$ for both firms

> [!success]- Solution
> By the profit max rule $MC = P$, we get
> $$
> 100 - 0.5q_1 - 0.5q_2 = 5 \implies q_1 + q_2 = 190
> $$
> 
> $$
> 100 - 0.5q_1 - 0.5q_2 = q_2 \implies q_1 + 3q_2 = 200
> $$
> 
> This gives us $q_2 = 5$ and $q_1 = 185$
> 
>  $$ R_1 = p\cdot q_1 = 100q_1 - 0.5 q_1^2 - 0.5q_2q_1 = 925 $$
>  
>  $$ R_2 = p\cdot q_2 = 100q_2 - 0.5 q_1q_2 - 0.5q_2^2 = 25$$
>  
>  So, the max profit is:
>  
>  $$\Pi_1 = 925 - 5\times185 = \boxed{0}$$
>  
>  $$\Pi_2 = 25 - 0.5\times25 = \boxed{12.5}$$