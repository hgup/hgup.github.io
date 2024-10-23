---
title: SMAC (CES)
draft: false
tags:
  - PECO101
date: 2024-10-23 13:27
---
The production function of the firm 
$$
q = A\left[\alpha x_1^{-\rho} + (1-\alpha)x_2^{-\rho}\right]^{\left(-\frac{1}{\rho}\right)}
$$

$$
\begin{align*}
f(\lambda x_1, \lambda x_2) &=  \left(\lambda^{-\rho}\right)^{\left(-\frac{1}{\rho}\right)} \cdot q\\
&=\lambda f(x_1, x_2)

\end{align*}
$$

$$
f_1 = A\left[-\rho\alpha x_1^{-\rho - 1} \right]\left(-\frac{1}{\rho}\right) \left[\alpha x_1^{-\rho} + (1-\alpha)x_2^{-\rho}\right]^{\left(-\frac{1+\rho}{\rho}\right)}
$$

$$
f_2 = A\left[-\rho(1-\alpha) x_2^{-\rho - 1}\right]\left(-\frac{1}{\rho}\right) \left[\alpha x_1^{-\rho} + (1-\alpha)x_2^{-\rho}\right]^{\left(-\frac{1+\rho}{\rho}\right)}
$$

$$
\verb|MRTS| = \dfrac{f_1}{f_2} = \dfrac{\alpha x_1^{-\rho - 1}}{(1-\alpha)x_2^{-\rho - 1}} = \dfrac{\alpha}{1-\alpha}\left(\dfrac{x_2}{x_1}\right)^{(1+\rho)}
$$

$$
\begin{align*}
\rho &= \dfrac{d (x_2/x_1)}{x_2/x_1} \div \dfrac{d(\verb|MRTS|)}{\verb|MRTS|}\\
&= \dfrac{d (x_2/x_1)}{x_2/x_1} \div \dfrac{\dfrac{\alpha}{1-\alpha} (1+\rho)\left(\dfrac{x_2}{x_1}\right)^\rho\cdot d(x_2/x_1)}{\dfrac{\alpha}{1-\alpha} \left(\dfrac{x_2}{x_1}\right)^{\rho+1}}\\
&= \dfrac{1}{1+\rho}
\end{align*}
$$

So, $\qquad\qquad\boxed{\rho = \dfrac{1}{1+\rho}}$
