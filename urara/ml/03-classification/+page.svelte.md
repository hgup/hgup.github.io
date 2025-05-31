---
title: Classification
alt: Classification
created: 2025-05-30
updated: 2025-05-30
tags:
---

### Precision & Recall

**Precision** refers to "How many times were you right about a Positive?" This measures the *accuracy* of positive predictions. $$
\text{precision} = \frac{TP}{TP + FP}
$$
**Recall** refers to "How many positives could you recall correctly?". Also refers to *sensitivity* or *True Positive Rate* (TPR).  $$
\text{recall} = \frac{TP}{TP + FN}
$$
> Why do we need both precision and recall? 
>
> Think of it this way. If I correctly identified 10 positives, $TP = 10$. Say, I was very careful, so I didn't make any false positives, $FP = 0$ (e.g. never deem the innocent guilty even if it means you will have to let go of some criminals), so $FN \neq 0$.
> 
> This means our precision remains $100\%$ (careful to ensure there are no $FP$) but our recall would reduce, since we are letting some criminals go ($FN \neq 0$).

The confusion matrix gives a good idea about the accuracy of binary classifiers

```python

```