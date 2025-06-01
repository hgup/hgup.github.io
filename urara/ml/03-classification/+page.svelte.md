---
title: Classification
alt: Classification
created: 2025-05-30
updated: 2025-05-30
tags:
---

### Precision & Recall

**Precision** refers to "How many times were you right about a Positive?" This measures the *accuracy* of positive predictions. 
$$
\text{precision} = \frac{TP}{TP + FP}
$$
**Recall** refers to "How many positives could you recall correctly?". Also refers to *sensitivity* or *True Positive Rate* (TPR).  Another way to think about recall is how well you are able to **DETECT** the positives? Are you able to detect all of them or are there a few misses?

Hey
$$
\text{recall} = \frac{TP}{TP + FN}
$$
> Why do we need both precision and recall? 
>
> Think of it this way. If I correctly identified 10 positives, $TP = 10$. Say, I was very careful, so I didn't make any false positives, $FP = 0$ (e.g. never deem the innocent guilty even if it means you will have to let go of some criminals), so $FN \neq 0$.
> 
> This means our precision remains $100\%$ (careful to ensure there are no $FP$) but our recall would reduce, since we are letting some criminals go ($FN \neq 0$).

- Need high precision when its important not to have any False positives (mark as safe. Like 'safe for children' videos or 'safe for eating' or 'safe from virus' to allow someone into your house)
- Need high recall when its important to catch shoplifters, it will be more inconvenient but its more important to "GET ALL THE POSITIVES RIGHT", even when there are more false positives.

### $F_{1}$ score

This is the harmonic mean of the precision and recall and gives more value to lower values. So, we get a higher $F_{1}$ score only when both precision and recall are higher
$$
F_{1} = \dfrac{2}{\dfrac{1}{\text{Precision}} + \dfrac{1}{\text{Recall}}}
$$
### Confusion Matrix

The confusion matrix gives a good idea about the accuracy of binary classifiers

```python
from sklearn.metrics import confusion_matrix
y_train_perfect_predictions = y_train_5
confusion_matrix(y_train_5, y_train_perfect_predictions)
```

Each row represents actual class (Positive / Negative). Each column represents predicted class (+ / -)
```
array([[54579, 0], # non-fives (Negative)
	  [ 0, 5421]], dtype=int64) # fives (Positive)
```


### ROC Curve

> Receiver Operating Characteristic is the plot between the `Sensitivity or Recall` vs  `1-Specificity or FPR`

Ratio of Positive instances correctly classified (as positive)
$$
\text{Recall/Sensitivity} = TPR = \dfrac{TP}{TP + FN} = \dfrac{TP}{\text{Total Actual Positives}}
$$
Ratio of Negative instances, incorrectly classified (as positive)
$$
FPR = \dfrac{FP}{TN + FP} = \dfrac{FP}{\text{Total Actual Negatives}}
$$
Ratio of Negative instances, correctly classified (as negative)
$$
\text{Specificity} = TNR = \dfrac{TN}{TN + FP} = \dfrac{TN}{\text{Total Actual Negatives}}
$$

> How to decide between ROC and PR?
> 
> If positive class is rare or when we care more about false positives than false negatives (e.g. Is a claim fradulent? Positive = fraudulant. In this case we will choose PR because both FP and FN are costly, but the primary concern is the class imbalance. Positive class is rare and *thus* we choose PR curves.)

Receiver Operating Characteristic - Area under the Curve (ROC AUC) is a metric used to compare different classifiers.
- Purely random: AUC = 0.5
- Perfect Classifier: AUC = 1.0

> `sklearn` classifiers generally have one or the other
> - `decision_function()`
> - `predict_proba()`

## Multivariate Classification

There are multiple types of classifiers:
- SGD
- Random Forest Classifier
- Naive Bayes

These have native support for multiple classes. But there are others that don't like
- Support Vector Machine Classifiers (SVCs)
- Logistic Regressions

They are strictly binary in nature. However, we can use alternate strategies like `OvR` (One vs Rest) and `OvO` (One vs One) strategy in order to use these models for multivariate classification. Say, we have $N$ classes (each having $\frac{1}{N}$ portion in the data)
- `OvR` fits $N$ binary models. Each model checking for one (positive) and the rest (negative). So, on each model we have to fit 100% of the data.
- `OvO` fits $\dbinom{N}{2}$ binary models, $(0,1), (0,2)\dots(1,2),(1,3)\dots$ i.e. pairs of each class against others. Thus each model we have to fit contains only 20% of the data. But the number of models to be fit would be huge (e.g. 10 classes will require 45 models to be fit). So, this can be utilized by models that don't scale well with data. E.g. `SVC`s.

### Variations

- **Multiclass** can have multiple classes (e.g. 0,1,2,3...) for the singular label that is being predicted.
- **Multilabel**  can have multiple labels (each having a binary class)
- **Multioutput** is a generalization of multilabel where there are multiple labels and each label can have multiple classes.

In essence, every model is just a specification of a multioutput model.
$$
\text{Multilabel} + \text{Multiclass} = \text{Multioutput} 
$$

> The author shows an insane example for **multioutput** where he trains a model to remove the noise from a noisy digit using the `knn` classifier.

