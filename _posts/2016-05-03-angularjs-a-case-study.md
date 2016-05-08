---
layout: post
title: "AngularJS a Case Study"
date: 2016-05-03
description: "Any description!"
icon: fa-pagelines
highlight: 1
---

AngularJS is an important step towards a better client-side code structuring that allow us to work with a consistent MVC architecture. However the choise per se doesn't necessary imply a consistent code structuring, in terms of organization, code decoupling, testability and so on.

In the following lines I'll discuss a Santos City Hall case study that can answer relevant questions that came up to our minds when starting a new angular application.

## Directory Structure
We have different ways of thinking about directory organization, I've considered the two most commons: type organization and component organization.

![Type organization](/images/posts/angularjs-a-case-study/1.png)
![Component organization](/images/posts/angularjs-a-case-study/2.png)

The first one, the most common, is a great solution for small projects, we can set up quickly, we have separation of concerns, controllers have their own folder, views have their own folder and so on. However this approach falls apart when the application starts growing and you start scrolling in your directory tree to find the required files and mainly you don't have a rapid understanding about the components of your system.

In the component organization structure each component here will resemble a mini-MVC application by having a view, controller, services and the other required angular components for that feature. Going on this way we achieve a high level of scalability and testability on our application.

For further reading  that is an interesting article on [scotch.io](https://scotch.io/tutorials/angularjs-best-practices-directory-structure).

## Task runner
Why to use task runners? Here are some good answers:

* [CSS and JS pre-processors compilation](https://developers.google.com/web/tools/setup/setup-preprocessors);
* JS concatenating/minifying files;
* [Linting javascript](http://www.javascriptlint.com/);
* Browser live-reload;
* Run tests.

Having in mind their needed, it comes up to our minds which one to choose and how to structure them to achieve the mention results? Scaffold is what I'm talking about.

## Scaffold
Though javascript frameworks are basically a single or a couple of js files, some of them, like EmberJs, comes out of the box with a completely project basis (task runners, command line utilities, and so on ..)  inside it. This is not a reality for AngularJS.

This fact can cause some problems concerning about the best approach  to set up a project-basis, I mean, questions related about which directory structuring, task runner, css and js preprocessor, test tools and etc. For this question there is an awesome tool called [yeoman.io](http://yeoman.io/) which is a scaffolding tool for modern web apps. There we can find scaffold for a great variety of technologies.

In this project I've chosen [angular-gulp-generator](https://github.com/Swiip/generator-gulp-angular) a scaffold that has solved my team needs having in it component directory orientation, ECMAscript 6 support through babel preprocessor, full support to the main css preprocessors (less, sass and stylus) and so on. Basically we just gotta go there and choose that one which most meet our needs.

## Single page application
Usability is, with no doubts, one of the main concerns in every project and it's an item that affects directly how great the system will be evaluated for their users. Single page apps allow us to offer a more-native-app-like experience to them.

> Single page apps are distinguished by their ability to redraw any part of the user interface without requiring a server round-trip to retrieve HTML.

In the early days this approach was a great challenge and usually your implementation it boils down to [code smell](http://martinfowler.com/bliki/CodeSmell.html) architecture. Luckily those days are gone, and thanks to AngularJS and others, this implementation nowadays sounds more natural. In fact most MVC js frameworks are built based on this concept.

To further reading there is an awesome article on [http://singlepageappbook.com/](http://singlepageappbook.com/).    

## Front-end Independence
Developing an app based on the concept above, lead us to think about a clear separation of concerns about front-end and back-end, so independence here is the key word.

Once we've achieved that goal those projects (front and back-end) can grow independently and act in different contexts. For instance a back-end solution can be used in a web, mobile and desktop interface. And a front-end solution can work with different back-end technologies.

As a technology used to reach it, [REST](http://rest.elkstein.org/) was the choice. It's a lightweight alternative to mechanisms like RPC (Remote Procedure Calls) and Web Services (SOAP, WSDL, and others). It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used.

## Modularization
In an AngularJS context, modularization means an organization by function instead of type. Your components (controllers, filters, directives ...) will live in modules instead of wherever they live now.

We essentially have separate “apps” within our application, each of which are independent and has your own objects.

![Angular modularization](/images/posts/angularjs-a-case-study/3.jpg)

This approach guarantee re-usability, a clear separation of concerns and testability to our applications.

## Conclusion
Those are same basic steps, made in a public organization context, to set up quickly, a new web project-basis, and though you may have different needs, it represents a good workflow to starting a project-basis with angularJS.
