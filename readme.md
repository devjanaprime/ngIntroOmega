NG Intro ver 0.1
===

- create basic node/express project as we have in the past
- include angular.min.js in the vendors folder (instead of JQuery)
- in client side js create a new angular module:
```
var myApp = angular.module( 'myApp', [] );
```

- create a new controller for my app:

```
myApp.controller( 'AngularIntro', function(){
  console.log( 'NG' );
}); //end AngularIntro controller
```

- connect to HTML:

```
<body ng-app='myApp'>
  <h1>NG Launchpad</h1>
  <div ng-controller='AngularIntro'>
  </div>
</body>
```

- test our first two-way bind inside of the controller div:
```
  <input type='text' ng-model='userInput'/>{{ userInput }}
```
