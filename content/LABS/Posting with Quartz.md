---
title: Posting with Quartz
draft: false
tags:
  - publishing
  - obsidian
date: 2024-09-17
---
As you might have noticed, this site has been built using [[Quartz]], which essentially takes my Obsidian Vault and organizes all the notes in an easy to navigate website manner.

## Some Challenges

**Problem:** I use [[Excalidraw]] to take notes, but a problem is that, these files are not directly rendered into the Quartz framework. I #hope they add support to it in the future.

**Workaround:** Enable the option where you can maintain a synced copy of the excalidraw file in Obsidian in an svg form and just change the extension name of the file to `.excalidraw.light.svg`. This actually works flawlessly.

---

**Problem**: Now because of this I can have only light mode documents.

**Workaround**: Disable dark mode *Flashbang!*

---

**Problem:** When I try to push to the repo using my Obsidian script, the build doesn’t show up for some odd reason.

# Interesting Tips

- Use [[longform]] to create different folders and write using them.
- Use [[shell commands]] plugin to create a shortcut that pushes new content onto [[GitHub]] and then GitHub actions will publish the changes.
- Maybe consider removing the `README.md` from the root of your quartz folder to avoid some funny stuff showing up every time you build the site.
- I write a lot of equations and also use the `\begin{align}` syntax for aligning multiple lines. But that causes quartz to put an equation number for every equation in the page. That’s normal behavior. So, what we can do is use `\begin{align*}` instead (this is actually a $\LaTeX$ tip).