---
title: Learn Regex
draft: true
tags:
  - regex
date: 2024-09-30 13:20
---
![[Pasted image 20240930133651.png]]

**The original site: [regexlearn](https://regexlearn.com/learn/regex101)**
## Test

If you can answer these, you don’t need to go through this course:

1. What is this `^\w+\.pdf$`?


## Learn

- we can directly search for the string of characters verbatim, we are looking for
- the **period** (dot) `.` is for selecting any kind of character, including special chars and spaces (full stop for any character)
	- ![[Pasted image 20240930132533.png]]
- we can use **character sets** `[abc]`. This basically means `c[au]t` will select `cat` and `cut`. The alternative characters, `a` **or** `u` will be checked with each possibility.
	- `b[aeiou]r` selects all of `bar`, `ber`..., `bur` etc
- we can use **negated character sets** `[^abc]` to ensure that our selections will not have `a` and `b` and `c` in that particular spot
	- `b[^eo]r` selects `bar`, `bir` and `bur`
- we can use **alphanumeric range** (based on [[ASCII]]), `[a-z]` or `[0-9]`
	- `[e-o]`  selects all alphabets  `efghijklmno`
	- `[3-6]` selects `3456`
- 
