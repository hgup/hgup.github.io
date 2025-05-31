---
title: Scikit Learn Notes
image: 
alt: Scikit Learn
created: 2025-05-31
updated: 2025-05-31
tags:
---
## `sklearn` Legend

| import                    | task                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `sklearn.model_selection` | Helps in selecting between models.<br>Also, splitting train-test                                                 |
| `sklearn.impute`          | Missing Values                                                                                                   |
| `sklearn.preprocessing`   | Change the form of data.<br>Ordinal Categorical $\to$ Numbers. Make it machine friendly                          |
| `sklearn.base`            | Access base classes to create custom `estimator`, `transformer`                                                  |
| `sklearn.pipeline`        | Create pipelines                                                                                                 |
| `sklearn.compose`         | Access to **column transformers**<br>(take care of categorical and numerical columns in the same transformation) |
| `sklearn.metrics`         | Score functions; Performance metrics; Distance computations                                                      |
| `sklearn.tree`            | Decision tree based models                                                                                       |
| `sklearn.ensemble`        | Various ensemble methods (e.g. `RandomForestRegressor`)                                                          |

## `pandas` tricks

- `pd.cut()` helps you cut a series. There are two ways to do so
	- By specifying how many categories we need like so `pd.cut(dataFrame, NO_OF_CATEGORIES)`
	- By specifying the exact bins of categories like so `pd.cut(dataFrame, bins=[0., 1.5, 3.0, 4.5, np.inf], labels= [1,2,3,4,5])`
	- Labelling is done to give a name (in this case ordinal) to each of the categories

### `pd.DataFrame`

- \#concept **axis** refers to the row, column or a higher dimensional point (e.g. `axis=0` refers to rows, `axis=1` refers to columns. `axis=3` can refer to time, if we have data across years and each row corresponds to the same entity.)

- `loc` and `iloc` have this commonly known distinction that the first is used to index by **label** but the latter by `index`.
  - But also know that when we take a subset of the **dataframe** (say, main) (lets say while test-train splitting of the data), the original `index` values of main df is preserved as the labels of the subsets.
  - e.g. `main = [1,2,3,4,5,6,7]` are the default labels (for an unlabelled df main), and upon splitting it we get subsets `A = [1,3,4,5]` and `B = [2,6,7]`
  - So now note that we cannot do `A.loc[range(1,5)]` since we don't have **label** 2 in our `A`. But `A.iloc[range(1,5)]` will definitely work since indices are always in sequence.
#### Tricks

- `list(df)` gives us a list of all the columns of the `pd.DataFrame`. Instead of using `df.columns` which gives us an `pd.Index` of column names.

### `pd.Series`

- `pd.Series.apply()` applies a function to each element of the series and returns another series with the output of each of those function call in the same order.

- if you want the "label" to each of the items in a pandas series, its actually called `index`

### `pd.plotting`

```python
housing.plot(kind="scatter",x='longitude',y='latitude',alpha=.4,
             s=housing['population']/100, label="population",
             c="median_house_value", colorbar=True, cmap=plt.get_cmap('jet'))
```
  - `s` is the radius of the circle.
  - `alpha` opacity.
  - `c` is the color (always give the name of the property (e.g. `"population"` instead of `housing['population']` whenever possible, here we needed to make an adjustment to the size).
  - `cmap` gives us the color map.


`scatter_matrix` is used to plot correlation maps.


## `numpy` tricks

### `np.ndarray`

- **N-dimensional array**
- Use `iloc` to reference by index
- Use `loc` to reference by label (==check this==: It is also possible to pass in an index, if label for the data is not available)


## Intuition

### Indices

- What does `X[:,:]` mean?
- How did you say **all rows**? How did you say **all columns**?
- So, what is `X[a:b,:]`, (where `a` and `b` are integers)?
	- Rows/Records are lower dimensional, so the first index  (here `a:b`) always refer to rows. This is what we call `axis=0`
	- Columns/Headers/Attributes are higher dimensional, so the second index (here ` : `) always refer to column. This is what we call `axis=1`
	- Thus, `X[a:b,:]` means, "select **all columns** from the **records whose indices start from `a` and do not equal or exceed `b`**"
	- Similarly, `X[:,:c]` means "select **those columns with index $<$ `c`** from **all records**"


## General Tricks

### Typecasting

- `pandas.core.series.Series`.`astype(np.int8)` to convert string to integers (or float to integers)
 
