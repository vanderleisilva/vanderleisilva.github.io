---
layout: post
title: "Pokémon Battle"
date: 2017-10-17
description: "Learning about JS frontend and backend technologies with Pokémons"
icon: fa-share-alt
highlight: 1
---

Coauthored with [Rafael Monteiro](http://rafaelmonteiro.github.io/) and [Gabriel Olivério](http://broncodev.com/)
Contributors: [Danilo Bezerra](https://www.linkedin.com/in/danilo-bezerra/), [Diego Souza](http://diegosouza.github.io/), [Gabriel](http://broncodev.com/), [Rafael Monteiro](http://rafaelmonteiro.github.io/)

## Introduction
This article is the first of a series about the main frontend frameworks and backend technologies, which is based on a thematic project to show how these
 interfaces respond using different implementations.

## Get your pokémon
First of all [check out](https://pokemon-battlevue.herokuapp.com/) our live demo Pokemon Battle and take a look at the [source code](https://github.com/vanderleisilva/pokemon-battle).
For this article we’re going to explore its construction focused on VueJS and PHP Lumen.

## Frontend
In few words VueJS was our first option to implement the interface because: it’s performatic, reactive, component driven and (maybe the main point, though some will argue that is subjective, it’s easy to learn and fast to implement) .

Great internet tools give us a clue of how fast VueJS is, [check it out](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html). Performance when talking about JS frameworks is often associated to ReactJS, but VueJS can be even faster, check this [amazing comparison](https://medium.com/js-dojo/react-or-vue-which-javascript-ui-library-should-you-be-using-543a383608d) between them.

When you pass a plain JavaScript object to a Vue instance as its data option, Vue will walk through all of its properties and convert them to getter/setters using Object.defineProperty. The getter/setters are invisible, but under the hood they enable Vue to perform dependency-tracking and change-notification when properties are accessed or modified. So with that we achieve in a easy way reactivity and data separation from the DOM.

It’s easy and fast to implement because is component based. There is no need to understand in depth design pattern and related stuffs (of course that is even better if you understand them, but is not a requirement to develop great applications with Vue). Every component is compounded by an html file (or any other html pre-processor) a css file (or any other pre-processor) and a js file (or again, any other pre-processor) and just that. 

## Backend
We decided to go for Lumen (Laravel's micro framework) as we had a previous experience with Laravel. So, we could get the benefits of Laravel’s core without increasing it's bootstrap with structures that we would not use (in a restful API context).

Basically, 3 routes are provided: 

Get all Pokémons
Select player's Pokémon
Hit your opponent

The “heavy” part is when we do the calculations to determine how much damage your Pokemon will cause/receive. It considers the traditional Pokemon types advantages/disadvantages. Besides that, we've added the miss/critical situations, where a random value can make your Pokemon fail to cause damage into its opponent or do almost twice of its normal damage.

The Pokémons and their attacks were stored in a [separate JSON file](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/storage/app/pokemons.json) and were implemented repositories to retrieve them by name and random ones. The [Pokemon class](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/app/Pokemon.php) encapsulates the data retrieved by the [PokemonRepository](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/app/Repositories/PokemonRepository.php) as well as providing the behavior of hitting another Pokémon. The type modifier and damage computation of inflicted attacks were implemented by specific classes. [TypeModifierCalculator](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/app/TypeModifierCalculator.php) uses a [type chart](https://bulbapedia.bulbagarden.net/wiki/Type/Type_chart) - multipliers that consider the inflicted attack type and the opponent Pokémon type to modify the caused damage. [DamageCalculator](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/app/DamageCalculator.php) implements the [official formula](https://bulbapedia.bulbagarden.net/wiki/Damage), which uses the [TypeModifier](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/app/TypeModifier.php) returned by the [TypeModifierCalculator](https://github.com/rafaelmonteiro/pokemon-battle-lumen/blob/master/app/TypeModifierCalculator.php). Tests were implemented for all significant classes in order to ensure their expected behavior, achieving 85% of test coverage.

We tried to follow as strict as possible the [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) - the classes have only one responsibility, their behavior can be easily extended without modifying their code, they don’t need to implement unnecessary methods because they implement an interface and they are easily replaceable by their subtypes. This way we could ship a reliable and maintainable piece of software, with a score of 4.0 on [Codeclimate](https://codeclimate.com/github/rafaelmonteiro/pokemon-battle-lumen).

## Agile methodology
The project was developed around the SCRUM concepts, so we step-by-step delivered a plenty functional software. In each cycle new functionalities were added and existing ones improved. On that scenario code refactoring was a common practice. 

## Keep connected
As we mentioned before, this is just the beginning, in the next days we’re going to rebuild this interface using different tools and then create a real experience of what can we get with each one. We understand that tools like this are amazing to have a clue, but they are just numbers and evidences. We aim here, a real experience, so be ready for the next episodes.

Subscribe our RSS feed and get updated.
[Rafael Monteiro](http://rafaelmonteiro.github.io/feed.xml), [Vanderlei Silva](http://localhost:4000/blog/atom.xml)

Watch and stars us on [Github](https://github.com/vanderleisilva/pokemon-battle)!!
