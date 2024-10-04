---
title: Base Shifting
draft: false
tags:
  - economics
  - datascience
date: 2024-10-04 10:20
---
We can do base shifting using the go-to splicing method:

> [!tldr] 
> Just remember one basic thing: The base might change the absolute value, but the **factor of growth** between subsequent years will remain the same.

Consider the [[Consumer Price Index]] data (from RBI). They provided parts of the data to use in different base years. 

> [!Example]- Data (click to expand)
> 
> ## Consumer Price Index
> 
> | Year    | (1960 = 100) | (1982=100) | (2001=100) | (2016=100) |
> | ------- | ------------ | ---------- | ---------- | ---------- |
> | 1970-71 | 186          |            |            |            |
> | 1971-72 | 192          |            |            |            |
> | 1972-73 | 207          |            |            |            |
> | 1973-74 | 250          |            |            |            |
> | 1974-75 | 317          |            |            |            |
> | 1975-76 | 313          |            |            |            |
> | 1976-77 | 301          |            |            |            |
> | 1977-78 | 324          |            |            |            |
> | 1978-79 | 331          |            |            |            |
> | 1979-80 | 360          |            |            |            |
> | 1980-81 | 401          |            |            |            |
> | 1981-82 | 451          |            |            |            |
> | 1982-83 | 486          |            |            |            |
> | 1983-84 | 547          | 111        |            |            |
> | 1984-85 | 582          | 118        |            |            |
> | 1985-86 | 620          | 126        |            |            |
> | 1986-87 | 674          | 137        |            |            |
> | 1987-88 | 736          | 149        |            |            |
> | 1988-89 |              | 163        |            |            |
> | 1989-90 |              | 173        |            |            |
> | 1990-91 |              | 193        |            |            |
> | 1991-92 |              | 219        |            |            |
> | 1992-93 |              | 240        |            |            |
> | 1993-94 |              | 258        |            |            |
> | 1994-95 |              | 284        |            |            |
> | 1995-96 |              | 313        |            |            |
> | 1996-97 |              | 342        |            |            |
> | 1997-98 |              | 366        |            |            |
> | 1998-99 |              | 414        |            |            |
> | 1999-00 |              | 428        |            |            |
> | 2000-01 |              | 444        |            |            |
> | 2001-02 |              | 463        | 100        |            |
> | 2002-03 |              | 482        |            |            |
> | 2003-04 |              | 500        |            |            |
> | 2004-05 |              | 520        |            |            |
> | 2005-06 |              |            | 117        |            |
> | 2006-07 |              |            | 125        |            |
> | 2007-08 |              |            | 133        |            |
> | 2008-09 |              |            | 145        |            |
> | 2009-10 |              |            | 163        |            |
> | 2010-11 |              |            | 180        |            |
> | 2011-12 |              |            | 195        |            |
> | 2012-13 |              |            | 215        |            |
> | 2013-14 |              |            | 236        |            |
> | 2014-15 |              |            | 251        |            |
> | 2015-16 |              |            | 265        |            |
> | 2016-17 |              |            | 276        | 100        |
> | 2017-18 |              |            | 284        |            |
> | 2018-19 |              |            | 300        |            |
> | 2019-20 |              |            | 323        |            |
> | 2020-21 |              |            |            | 118        |
> | 2021-22 |              |            |            | 124        |
> | 2022-23 |              |            |            | 131        |
> | 2023-24 |              |            |            | 138        |
>

But, recall the core fundamental, the **factor of growth** between any two subsequent years will remain the same.

So now, consider the year range ($1983 \to 1988$), and calculate the factors of growth between subsequent years, in both the bases.

| Year           | $X_t$ (1960=100) | $Y_t$ (1982=100) | $X_{t+1}/X_t$ | $Y_{t+1}/Y_{t}$ |
| -------------- | ---------------- | ---------------- | ------------- | --------------- |
| 1983-84        | 547              | 111              | 1.063063      | 1.063985        |
| 1984-85        | 582              | 118              | 1.067797      | 1.065292        |
| 1985-86        | 620              | 126              | 1.087302      | 1.087097        |
| 1986-87        | 674              | 137              | 1.087591      | 1.091988        |
| 1987-88   <br> | 736<br>          | 149              |               |                 |

We note that the factors are *almost* same, but understand that they are in reality, **exactly the same** and due to the fact that CPIs are rounded to the nearest units digit, we get that difference.

So, what do we need to do in order to extrapolate values?

Just multiply the given year $Z_t$ (in any base) with the factor of growth for that particular year $\dfrac{X_{t+1}}{X_{t}}$ (for any other base). For example, to calculate $Z_{2016}$, if $Z_{2015}$ is given we just need to do
$$
Z_{2016} = Z_{2015} \times \dfrac{X_{2016}}{X_{2015}}
$$
Please understand that this works, because the **factor of growth** from 2015 to 2016 is the same whether we calculate it wrt. the base year for the $X$-series or the $Z$-series. It’s all the same.