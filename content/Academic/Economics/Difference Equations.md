---
title: Difference Equations
draft: false
tags:
  - PECO103
date: 2024-09-23T09:15:00
---
- [[Differential Equations]] are for continuous functions and their derivatives, $\dfrac{dy}{dt}$
- what about discretely increasing (step-wise) functions?

Now, consider the function,
$$
I_{2024} = f(Y_{2023})
$$
Here, investment, $I$ is the dependent variable in 2024, and we have a lagged (2023) in dependent variable, income $Y$.


> [!NOTE] What is a difference equation?
> A difference equation expresses a relationship between the dependent variable and a lagged independent variable, which change at discrete intervals of time.
> 
> $$
> \Delta{y} = y_t - y_{t-k}
> $$
> 
> where $k$ is the lag.

- when we take time as a continuous variable then we need to use a [[Differential Equations]], but when we use time as a discrete variable, we need to use a [[Difference Equations]].


> [!important] Standard form of [[Difference Equations]]
> 
> $$
> y_t = by_{t-1} + a
> $$
> 
> - it is also called a [[First Order Linear Difference Equation]]


> [!important] General Formula for Definite Solution
> $$
> y_t = \left(y_0 - \dfrac{a}{1-b}\right)b^t + \dfrac{a}{1-b} \quad;\qquad b\neq 1
> $$
> - we call it **definite** because $y_0$ will be given.
> 
> If $b = 1$,
> $$
> y_t = y_0 + \dfrac{a}{1-b}
> $$

By solving difference equation, our objective is to find the [[time path]]. The solution should be a function of time and must not contain any [[Difference Expression]]

# Problems


> [!Question] Solve the following Difference Equations
> 
> 1. Given the difference equation,
> 
> $$
> \tag{1}
> y_t = -7y_{t-1} + 16\quad;\quad y_0=5
> $$
> 
> 2. Find the time path for the national income $y_t$ when consumption $c_t$, investments $I_t$ and $y_0$ are given as follows:[^yci]
> 
> $$
> \begin{align*}
> \tag{2}
> c_t &= 60 + 0.8y_{t-1}\\
> I_t &= 50\\
> y_0 &= 1300 \\
> \end{align*}
> $$
> 
> 3. Find the 
>    
> $$
> \begin{align*}
> \tag{2}
> c_t &= 0.9y_t-1 + 90\\
> I_t &= 100\\
> y_0 &= 1000 \\
> \end{align*}
> $$


> [!Success]+ Solution 1
> From the equation we can infer that $a = 16$, $b=-7$
> 
> Applying these and $y_0= 5$ into the solution for the [[time path]] we get,
> 
>  $$ y_t = \left(5 + \dfrac{16}{8}\right)(-7)^t + \dfrac{16}{8} $$
> $$ \implies\boxed{y_t = (-1)^t(7)^{t+1} + 2} $$
> 
> 

> [!Success]+ Solution 2
> 
> From the equation, $y = c + i + g$ we get,
> 
>  $$ 60 + 0.8y_{t-1} = y_t - I_t $$
>  
>  $$ 60 + 0.8y_{t-1} = y_t - 50 $$
>   
>  $$ y_t = 110 + 0.8y_{t-1} $$
>  
> So, we find the parameters as $a = 110$, $b=0.8$
> 
>  Hence, the [[time path]] is
>  $$ y_t = \left(1300 - \dfrac{110}{0.2}\right)0.8^t + \dfrac{110}{0.2} $$
>   $$ y_t = 750(0.8)^t + 550 $$

```math-tex
1300 - 110/0.2
110/0.2
```


# Drawing the [[time path]]

There are four cases:
## 1. $b > 1$

- grows exponentially

## 2. $b = 0$

- Shrinks to zero at once.

## 3. $0\lt b \lt 1$

- dampening and converging


![[Difference Equations 2024-09-23 09.59.13.excalidraw]]

## 4. $-1\lt b \lt 0$

- dampening and oscillating -> converting to $0$

![[Difference Equations 2024-09-23 10.05.39.excalidraw]]

After seeing 7 situations, there are four observations

| If              | Then                        |
| --------------- | --------------------------- |
| $\|{b}\| \gt 1$ | Time path explodes          |
| $\|b\|\lt 1$    | Time path converges         |
| $b\gt 0$        | Time path doesn’t oscillate |
| $b \lt 0$       | Time path oscillates        |



[^yci]: $y= c + i +g$


