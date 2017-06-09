console.log( 'js' );

// create a new angular module names "myApp"
var myApp = angular.module( 'myApp', [] );

// add a controller to myApp

myApp.controller( 'AngularIntro', function(){
  console.log( 'NG' );
}); //end AngularIntro controller

/****************
after creating the module and controller, these must be connected to html
do this with ng-app and ng-controller
see index.html for reference
****************/
