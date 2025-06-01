---
title: Custom Classes in sklearn
image_: /ml/sklearn/custom-classes/
alt: Custom Classes in sklearn
created: 2025-05-31
updated: 2025-05-31
tags:
---
We are going to use the housing dataset from this.

```python
housing.info()
```

```text
<class 'pandas.core.frame.DataFrame'>
Int64Index: 16512 entries, 12655 to 19773
Data columns (total 13 columns):
 #   Column                    Non-Null Count  Dtype   
---  ------                    --------------  -----   
 0   longitude                 16512 non-null  float64 
 1   latitude                  16512 non-null  float64 
 2   housing_median_age        16512 non-null  float64 
 3   total_rooms               16512 non-null  float64 
 4   total_bedrooms            16512 non-null  float64 
 5   population                16512 non-null  float64 
 6   households                16512 non-null  float64 
 7   median_income             16512 non-null  float64 
 8   ocean_proximity           16512 non-null  object  
 9   income_cat                16512 non-null  category
 10  rooms_per_household       16512 non-null  float64 
 11  bedrooms_per_room         16354 non-null  float64 
 12  population_per_household  16512 non-null  float64 
dtypes: category(1), float64(11), object(1)
memory usage: 1.7+ MB
```

Now, we utilize `sklearn.base`'s `BaseEstimator` and `TransformerMixin` to make a custom transformer:

- `BaseEstimator` will give us a nice constructor class so that we don't need take care of all the base `*args` and `**kwargs` 
- `TransformerMixin` will give us the `.fit_transform()` function for free since we have have to define the `.fit()` and `.transform()` on our own. This was mentioned in Sklearn Design Consistency section.

Here is what the class looks like, we are trying to add the following attributes to our DF, so we are writing a transformation:

```python
from sklearn.base import BaseEstimator, TransformerMixin

rooms_ix, bedrooms_ix, population_ix, households_ix  = 3, 4, 5, 6

class CombinedAttributesAdder(BaseEstimator, TransformerMixin):
    def __init__(self, add_bedrooms_per_room = True):
        self.add_bedrooms_per_room = add_bedrooms_per_room
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        rooms_per_household = X[:, rooms_ix] / X[:, households_ix]
        population_per_household = X[:, population_ix] / X[:, households_ix]
        if self.add_bedrooms_per_room:
            bedrooms_per_room = X[:, bedrooms_ix] / X[:, rooms_ix]
            return np.c_[X, rooms_per_household, population_per_household, bedrooms_per_room]
        else:
            return np.c_[X, rooms_per_household, population_per_household]
            

attr_adder = CombinedAttributesAdder(add_bedrooms_per_room=False)
housing_extra_attribs = attr_adder.transform(housing.values)
```


> NOTE: `np.c_` is for concatenating arrays as columns. `np.c_[X, rooms_per_household, population_per_household]` will concatenate the already 2d `X` with the two columns `rooms_per_household` and `population_per_household`. If `X` was $1000\times10$ then the final output would be $1000\times 12$ (the two new columns added)

Should practice this pattern multiple times to get comfortable and so that thinking about it becomes natural.