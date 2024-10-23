---
title: spurious relationship
draft: false
tags:
  - statistics
date: 2024-10-03 15:23
---

> This concept in particular has a very simple #funda, but the only challenge is to remember the terms that explain it. Just keep this story on the back of your head, and remember the terms.

## Scenario

You are given a data-set for all the things that have happened during **summer**. You are shocked to find out that there is a serious correlation between Ice-cream sales and shark attacks. What’s going on?

![[spurious relationship 2024-10-03 15.25.41.excalidraw]]
Now, since this is a rather simple scenario for humans to think about (and many including myself have not seen sharks coming out of the water when ice-cream trucks come around), its safe to assume that **a real causative relationship doesn’t exist between the two**. So, what is actually causing it?

When we take a few steps back to see the big picture we will find that there was another parameter that affects both of them directly, that we didn’t think about. **Rising temperature** during summers:

![[spurious relationships 2024-10-03 15.32.08.excalidraw]]

Here, temperature is a [[confounding variable]], that makes us think that the [[predictor]] (ice-cream sales) has a direct effect on the [[outcome]] (shark attacks).

## Conclusion

Clearly, this was a rather simple example. But for those situations where we don’t have much idea about the interactions of the parameters in an unknown domain (say), it becomes very important that before we come to any conclusions we look for any [[confounding variable|confounding variables]] that may cause these kinds of [[spurious relationships]] and derail our analysis.
