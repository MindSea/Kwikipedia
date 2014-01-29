# Kwikipedia

This was a short intro demonstration of Angular JS that happened at the [MindSea Mobile Hackathon](http://mindsea.com/2013/10/22/mindsea-mobile-hackathon/). Each of the "slides" was me checking out the corresponding branch and walking people through what's changed. What follows are my rough talking notes:

## Preamble
* This is about Angular, and the things you need to do to make a mobile web application
* This is a technical talk
* No responsive design, but I can talk about that after
* Code is on GitHub

## Branch 1
* HTML 5 Boilerplate
* Quick and dirty — not using SASS/LESS
* Server.sh - Python, or other. I can help.
* I can access from my phone

## Branch 2
* Angular inserted
* MVC - loose
* Model is the data, usually from a server
* View is the DOM
* Controller is the JS
* Not going to dive too deep, but it's good to know this pattern, as most frameworks use it
* HTML App
* HTML Controller
* The message is now being served from Angular
* $scope is an object that's being injected into this anonymous function. There are a lot of things in Angular that are subtle and tricky. I'm not going to dive too deep into them in this talk. It's important to understand this stuff eventually, but you can get by at first by treating it as boilerplate.

## Branch 3
* Data binding!

## Branch 4
* Repeat

## Branch 5
* What can we do with this?
* wiki!
* This is a big chunk that's all happening at once, so let's walk through it
* First contentEditable!
* We're including Angular Route. This was in the core, but is now separate
* In JS: ngRoute is a dependancy of our module
* Our module gets a config block
* We inject two providers that we're configuring
* hash based urls for ease of demoing
* Routing
* We now have a new controller for this route. This is where most of our logic will go
* Routing is great for list/detail, or other things

## Branch 6
* Get the title outside of the view
* Only contentController gets the routeParams, but we want them in wikiController
* Let's use a factory!
* Factory is an object that we can pass parameters to and have it do things or provide data by its return value. In this case we're returning two functions we can use.
* We inject the Page object into our controllers so we can use it to pass data back and forth.

## Branch 7
* Kwikipedia - undefined kind of sucks
* While we're at it, let's try and pretty up the slugs so they can look more like titles. Simple logic: underscores

## Branch 8
* Ok, let's get some data in here.
* wikiController - $scope.data
* contentController - $scope.content
* content.html - ng-bind="content"
* Wait! This sucks too. Time for a terrible hack!

## Branch 9
* This is a terrible idea in the real world!!!
* You can turn off per instance, but this is easier for the demo
* $sceProvider
* content.html - ng-bind-html

## Branch 10
* When we go back and forth, our changes disappear. That blows. Let's save them in the model object.
* content.html - ng-keydown
* There are a lot of events you can bind to. Check the docs
* Look ma, no jQuery!
* It plays well with jQ, but you don't always need it.

## Branch 11
* Let's add the ability to link things up.
* ng-click="link()"
* Make the function, Again, no jQ
* titleToSlug!!!

## Branch 12
* Hey, wait, if I refresh, I lose everything. Let's fix that.
* First, a save button
* Check to see if we have local storage data before using the sample data
* When we click save, push the data to storage
* storage only likes strings, so use JSON
* Only personal, not shared. Could be hooked up to a server

## Branch 13
* let's make this more mobile.
* Icon
* viewport modifications (no scaling and dangers of it)
* cache.manifest and dangers
* phone demo

