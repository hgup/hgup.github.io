---
title: Learn Regex
draft: false
tags:
  - regex
date: 2024-09-30 13:20
---
![[Pasted image 20240930133651.png]]

**The original site: [regexlearn](https://regexlearn.com/learn/regex101)**
## Test

If you can answer these, you don’t need to go through this course:

1. What is this `^\w+\.pdf$`?
2. How to select the year in Release 10/9/**2021**?
 

## Learn

### Character Sets (All, numbers, alphabets, negations)

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

### Repetition

- these are placed after the characters
- `+`:  0 or 1(+) times
	- `be*r` -> `br`, `ber`, `beer` etc
- `*`:  1(+) times
	- `be+r` -> `ber`, `beer` (not `br`, doesn’t get selected)
- `?`: **optional** (single) character 
	- `colou?r` -> `color` and `colour` (`u` is optional)

- `{n}` to show **how many times**, the character it entails should repeat
	- `be{2}r` -> `beer`
- `{n,}` at **least** $n$ times.
	- `be{2,}r` -> `beer`, `beeer`, `beeer`
- `{n,m}` at **least** $n$ times and at **most** $m$ times.
	- `be{1,3}r` -> `ber`, `beer`, `beeer`
	
- `[0-9]{4}` selects the year in `10/9/2004`


### Grouping and Piping

> [!TIP] This is where things get fun (and complex!)

- **Parenthesis**: `(abc)` to group `abc`
- We can reference an already mentioned group by writing `\n` where $n$ can be any integer, e.g. `\1`, `\2` etc
	- `(ha)-\1,(haa)-\2`: is equivalent to writing `(ha)-(ha),(haa)-(haa)`
	- so, `\1` references `(ha)` and `\2` references `(haa)`
- **Non-Capturing Grouping**: `(?:)` to ensure that it is not captured by references.
	- In the previous example, `(?:ha)-(haa)-\1-\1` gives, `(ha)-(haa)-(haa)-(haa)`
	- notice how `(ha)` is avoided from being referenced due to that `(?:)` syntax.
- **Pipe Character** `|`
	- `(c|r)at|dog` selects `cat`, `rat` and `dot`.
	- Compare it with `[abc]` that operates at a character level, the `|` character operates at an *expression level*

### Escape and special sequences

- **Escape Character** `\`
- **Caret Sign**: `^` Selecting the line start
	- **Dollar Sign**: `$` Selecting by end of the line
- **Word Character** `\w`: Any letter, number and underscore
	- **Except Word Character** `\W`: Except letters, numbers and underscore
- **Digits**: `\d` (only numbers)
	- **Except Digits**: `\D` (except numbers)
- **Space**: `\s` only spaces
	- **Except Space**: `\S` only spaces

### Lookarounds

- **Positive Lookahead** `(?=)`
	- `\d+(?=PM)` looks for the number `3` in the expression `Date: 4 Aug 3PM`
	- the digit follows PM immediately
- **Negative Lookahead** `(?!)`[^1]
	- `\d+(?!PM)` looks for the number `4` in the expression `Date: 4 Aug 3PM`
- **Positive Lookbehind** `(?<=)`
	- `(?<=\$)\d+` looks for the number `5` in the expression `Product Code: 1064 Price: $5
- **Negative Lookbehind** `(?<!)`
	- `(?<!\$)\d+` looks for the number `1064` in the expression `Product Code: 1064 Price: $5

### Flags

- a.k.a. **modifiers** determine whether typed expressions 
	- treat text as separate lines
	- are case sensitive
	- find all matches
- **global flag**: `/<your regex expression>/g`
	- select all matches, (if not, then only the first one)
- **multiline flag**: `/<rgx>/m`
	- regex sees all text *as one line*
	- enabling this flag, makes regex respect the newlines
	- makes the `$` point to the last char of the first line
	- `/<rgx>/gm` will select all in each line
- **case insensitive flag**: `/<rgx>/i`
	- don’t worry about case bro

### Concept

- **greedy matching**: matchmaking will be as long as possible
	- ![[Pasted image 20240930184926.png]] Doesn’t stop at `ber`... goes till `beeeer`
- **lazy matching**: stops at the first matching
	- ![[Pasted image 20240930185033.png]] Stops at `ber`. lazy chico


### Done!
![[Pasted image 20240930185100.png]]
[^1]: instead of `=` in positive lookahead, we put the negation symbol `!`