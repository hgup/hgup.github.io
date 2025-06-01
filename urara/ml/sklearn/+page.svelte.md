---
title: Scikit Learn Notes
images: 
alt: Scikit Learn
created: 2025-05-31
updated: 2025-05-31
tags:
---
## `sklearn` Legend

| import                    | task                                                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `sklearn.model_selection` | Helps in selecting between models.<br>Also, splitting train-test                                                       |
| `sklearn.impute`          | Missing Values                                                                                                         |
| `sklearn.preprocessing`   | Change the form of data.<br>Ordinal Categorical $\to$ Numbers. Make it machine friendly                                |
| `sklearn.base`            | Access base classes to create custom `estimator`, `transformer`                                                        |
| `sklearn.pipeline`        | Create pipelines                                                                                                       |
| `sklearn.compose`         | Access to **column transformers**<br>(take care of categorical and numerical columns in the same transformation)       |
| `sklearn.metrics`         | Score functions; Performance metrics; Distance computations                                                            |
| `sklearn.tree`            | Decision tree based models                                                                                             |
| `sklearn.ensemble`        | Various ensemble methods (e.g. `RandomForestRegressor`)                                                                |
| `sklearn.svm`             | Dedicated for Support Vector Machines???                                                                               |
| `sklearn.multiclass`      | Access to `OneVsRestClassifier` and `OneVsOneClassifier` to override default multiclass behavior in Binary classifiers |
| `sklearn.neighbors`       | Distance based models                                                                                                  |

## Design Philosophy
### Consistency

> All objects share a consistent and simple interface

| Object         | Explanation                                                                                                                                                                                                                                                                                                        | Example |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| *Estimators*   | - Any object that can estimate some parameters based on the estimator<br>- The estimation is done by the `.fit()` method.<br>- Takes only a dataset as a parameter (or 2 (data and labels) for supervised learning algorithms)<br>- Any other parameter is considered as a `hyperparameter` (e.g. strategy)        | Imputer |
| *Transformers* | - Any object that can transform the **dataset**.<br>- The transformation is performed by the `.transform()` method, which takes input as a dataset to be transformed<br>- Both `.fit()` and `.transform()` can be conveniently be called together (with possible optimization) via the `.fit_transform()` function | Imputer |
| *Predictors*   | - Capable of making predictions.<br>- The `.predict()` method takes a dataset of new instances and returns a dataset of corresponding predictions.<br>- A predictor also has a `.score()` method that measures the quality of predictions, given **a test set** (w/ labels, in case of supervised learning).       |         |

Having learnt the above, now try implementing an [[Imputing Data using Scikit-Learn|imputing strategy in Scikit-Learn]].
### Inspection

1. Estimator's hyperparameters are accessible directly via public instance variables, e.g. `imputer.strategy`
2. Estimator's *learned* parameters are accessible in a similar fashion but with an `_` (underscore) suffix, e.g. `imputer.statistics_`

### Nonproliferation of Classes

1. All outputs given in the form of `numpy` arrays  or `scipy` sparse matrices.
2. Hyperparameters are regular python `string` or `numbers`

### Composition

 Existing building blocks
1. Can be reused
2. Can be combined to create a `Pipeline` (arbitrary sequence of transformations followed by a final estimator)

### Sensible defaults

1. Most common defaults
2. Baseline system is quick to create



## Models

### Classifiers

| Model    |                                   |                             |                        |
| -------- | --------------------------------- | --------------------------- | ---------------------- |
| `sgd`    | Stochastic Gradient Descent       | uses `.decision_function()` | Multiple               |
| `forest` | Random Forest Classifier          | uses `.predict_proba()`     | Multiple               |
|          | Naive Bayes                       |                             | Multiple               |
| `svc`    | Support Vector Machine Classifier | uses `.decision_function()` | Binary w/ OvO strategy |
|          |                                   |                             |                        |


### Attributes