---
layout: post
title: "Code Smell - Dispensables"
date: 2016-05-06
description: "Algumas regras básicas para redução de complexidade na codificação, vamos falar sobre code smell!"
icon: fa-bug
highlight: 1
---

We struggle daily to find ways to reduce code complexity, than in order to response an hypothetical future requirement we just start working in the opposite way. Do not do that! [You Are not Gonna Need It](http://xp.c2.com/YouArentGonnaNeedIt.html)

> Always implement things when you actually need them, never when you just foresee that you need them.

## Dispensable

A dispensable is something irrelevant and unnecessary whose absence would make the code cleaner, more efficient, easier to understand and mainly it's a great time saving!

It's one of the easiest understanding [code smell](http://martinfowler.com/bliki/CodeSmell.html), and at the same time, one of the most commons. It's composed by Speculative Generality, Dead Code, Duplicate Code, Data class and Lazy class.

Lights on that we're about to start our trip into Code More and Do Less!

## Speculative Generality
Do not try to solve the world's problem in a single day. This a common discussion when we are modeling a new system. We have a bunch of forecasters previewing all possible future situations. However it all boils down in either:

* you don't need it after all;
what you actually need is quite different from what you foresaw needing earlier;
* This doesn't mean you should avoid building flexibility into your code. It means you shouldn't over engineer something based on what you think you might need later on.

This concern is what XP methodology calls [You Are not Gonna Need It](http://xp.c2.com/YouArentGonnaNeedIt.html).

## Dead Code
Ruthlessly delete code that isn't being used. That's why we have source control systems!

If you have a variable, parameter, field, method or class that is no longer used, please remove them, this simple action will save a lot of time and let things easier to the next responsible for maintaining this code.

## Comments
Comments overload if often a sign of complex code and this usually means code smell, specially a [bloaters code smell](https://sourcemaking.com/refactoring/smells/bloaters). Having this is mind, if you still fell the need of comments,  be care about the way you write your comments. There's a fine line between comments that illuminate and comments that obscure. Do they explain "why" and not "what"?

And remember, you're writing comments for people, not for machines.

## Duplicate Code
Do not do the same work twice, computers work for you and not the opposite. We have different reasons for code duplication:

* Programmers working on different parts of the same program at the same time;
* Rushing to meet deadlines we may not resist to the temptation of copying and pasting a existent relevant code;
* Specific parts of code look different but actually perform the same job.

Though going through this process may be challenging, this is what makes our code rocks! Let's do that!.

## Data class
There is no reason for a class without behavior. A class that is only a data front-end to others, basically implementing getters and setters, it doesn't make sense.

If this is the case, look forward the client's code, you may find functionality that would be better located in the data class itself.

## Lazy class
Continuing the previews way of thinking, if you, after looking forward the client's code, didn't find any relevant code for your class,and than that class doesn't do enough to earn your attention, it should be deleted.

Components that are near-useless should be given the [Inline Class](https://sourcemaking.com/refactoring/inline-class) treatment.

## In brief
Here are the basic actions made for each problem, *let's code that*!

* Speculative **generality: make what is need**;
* Dead code: **remove them**;
* Comments: **create code self-explained**;
* Duplicate code: **remove them**;
* Data class: **Avoid classes that passively store data**;
* Lazy class: **remove them**;
