---
title: Stackelberg Model
draft: false
tags:
  - PECO101
date: 2024-09-23T10:50:00
---
# 4. Stackelberg Model

> [!tldr]
> In a [[notes/Cournot Model]] situation, if one of them turns out to be a leader, to independently make the first move => [[Stackelberg Model]]

Let $\Pi_1 = \Pi_1(q_1,q_2)$, $\Pi_2 = \Pi_2(q_1,q_2)$ be the  profit of the [[duopolist]]

Let $q_1 = \Psi_1(q_2)$ be the [[reaction function]] of $I$

$\qquad q_2 = \Psi_2(q_1)$  be the [[reaction function]] of $II$

Suppose $I$ wants to be leader then, he assumes that $II$ will be following leadership of $I$.

$\therefore\qquad$ $I$’s $\Pi$ function will be given

$\quad\qquad \Pi_1 = \Pi_1(q_1,\Psi_2(q_1))$ which is a function of $q_1$ only

$I$ will maximize this w.r.t. $q_1$ and get this leadership profit and leadership output. Similarly, $II$ will compete his leadership output and profit by assuming that $II$ is following through leadership function of $I$.

Suppose $I$ wants to be follower then he will accept $II$’s leadership output and his followership profit.

Similarly $I$ will compete with his followership profit.

By comparing the leadership profit and followership profit, each [[duopolist]] will decide the role to be a leader or to be a follower, depending on whichever is advantageous.


> [!Example] There are four possibilities given
> 1. $I$ -> L, $II$ -> F ✅
> 2. $I$ -> F, $II$ -> L ✅
> 3. $I$ -> L, $II$ -> L ❌
> 4. $I$ -> F, $II$ -> F ❌
>    
> From the four possibilities, we can observe that there cannot be [[equilibrium]] in (3) and (4) cases, there can be equilibrium only if $I$ accepts the leadership of the other as in case of (1) and (2)

## Example

$P = 100 - 0.5[q_1 + q_2]$ be the demand function

Let $c_1 = 5q_1$ ;$\quad c_2 = 0.5q_2^2$ be the cost function

[[reaction function|Reaction fn.]] are $q_1 = 95 - 0.5q_2$ for $I$

$\qquad\qquad\qquad\quad$  $q_2 = 50 - 0.25q_1$ for $II$

$I$’s profit is $\Pi_1 = 100q_1 - 0.5q_1^2 - 0.5q_1q_2 -5q_1$

If $I$ wants to be leader then $I$’s $\Pi$ will be given by

$$
\begin{align*}
\Pi_1 &= 100q_1 - 0.5q_1^2 -0.5q_1(0.5 - 0.25q_1) - 5q_1\\
&=70q_1 - 0.375q_1^2
\end{align*}
$$

For maximizing $\Pi_1$, $\dfrac{\partial{\pi_1}}{\partial{q_1}} = 70 - 0.75q_1 = 0$
$$
\therefore q_1 = \dfrac{70}{0.75} = 93\frac{1}{3}
$$
Thus, $q_1^L = 93\frac{1}{3}$ 
$$
\therefore \Pi_1^L = 70\left(93\dfrac{1}{3}\right) - 0.375\left(93\frac{1}{3}\right) = 3266\frac{2}{3}
$$

Similarly we get,
$$
\begin{align*}
q_2^L &= 35\\
\Pi_2^L &= 918.75\\
q_1^L &= 93\frac{1}{3}\\
\Pi_1^L &= 3266\frac{2}{3}\\
\end{align*}
$$

Suppose $I$ is follower then he accepts $II$’s leadership output $35$ and hence his followership output will be[^reaction]  $q_1^F = 95 - 0.5(35) = 77.5$. If this is substituted in $I$’s profit function then $\Pi_1^F = 70(77.5) - 0.375(77.5)^2 = 3003.125$

```math-tex
q_1 = 95 - 0.5*35
q_2 = 35
Profit_1 = 100q_1 - 0.5*q_1^2 - 0.5*q_1*q_2 - 5q_1
```

Now, if $II$ is a follower then he accepts $I$’s leadership output $93\frac{1}{3}$ and hence his followership output will be [^reaction] $q_2^F = 50-0.25(93\frac{1}{3}) =26\frac{2}{3}$. 

The profit of $II$ is given by 
$$
\Pi_2 = 100q_2 - 0.5q_1q_2 - q_2^2
$$
So, the followership profit of $II$ is given by $\Pi_2^F = 711.11$

```math-tex
q_1 = 93+1/3
q_2 = 50 - 0.25*93.333
Profit_2 = 100*q_2 - 0.5*q_1*q_2 - q_2^2
```

[^reaction]: By substituting in the [[reaction function]] of the other firm