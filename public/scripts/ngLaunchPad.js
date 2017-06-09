console.log( 'js' );

// create a new angular module names "myApp"
var myApp = angular.module( 'myApp', [] );

// add a controller to myApp

myApp.controller( 'AngularIntro', function(){
  var vm = this;

  vm.showFront = false;
  // our cars array, two way bound via controller
  vm.cars = [];

  vm.addCar = function(){
    console.log( 'in vm.addCar' );
    // get user input
    // place into a new object
    var newCar = {
      cost: vm.costIn,
      make: vm.makeIn,
      model: vm.modelIn,
      year: vm.yearIn
    }; //end newCar
    console.log( 'new car:', newCar );
    // push into an array
    vm.cars.push( newCar );
    console.log( vm.cars );
  }; //end addCar

  vm.removeCar = function( index){
    console.log( 'in removeCar:', index );
    vm.cars.splice( index, 1 );
  }; //end removeCar

  vm.testClick = function(){
    vm.output = 'You typed: '+ vm.userInput;
    console.log( 'You typed:', vm.userInput );
  }; // end testClick

  vm.toggleShow = function(){
    // invert boolean value
    vm.showFront = !vm.showFront;
  }; // end toggleShow

}); //end AngularIntro controller
/****************
after creating the module and controller, these must be connected to html
do this with ng-app and ng-controller
see index.html for reference
****************/
