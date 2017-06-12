Note: Each version has it's own branch
---

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

NG Intro ver 0.2
===

- modify your controller statement to use controller as syntax:
```
  <div ng-controller='AngularIntro as ai'>
```

- update your controller to use "vm" as "this":
```
myApp.controller( 'AngularIntro', function(){
  var vm = this;
```

- from now on we'll refer to this controller as "vm" in the javascript and "ai" in html

- next create a click function in your controller:
```
vm.testClick = function(){
  console.log( 'You typed:', vm.userInput );
}
```

- bind that click to a button on the html and update the input model to reference the controller:
```
  <input type='number' ng-model='ai.userInput'/>
  <button ng-click="ai.testClick()">Test Click</button>
```
- test in browser
- next, let's get some of that on the DOM
- add an expression for our output in the HTML:
```
<p>
  {{ ai.output }}
</p>
```
- create an vm.output and set it's value in the clientside js and add to your click function:
```
vm.testClick = function(){
  vm.output = 'You typed: '+ vm.userInput;
  console.log( 'You typed:', vm.userInput );
}
```

NG Intro ver 0.3:
===
- add a couple things to your HTML where one uses ng-show and the other ng-hide
- set them to be dependent on a boolean that is 2-way linked to the controller:
```
<h2 ng-show='ai.showFront'>Front</h2>
<h2 ng-hide='ai.showFront'>Back</h2>
```

- set an initial value for this variable in your js:
```
vm.showFront = false;
```
- test in browser and try changing the variable status to make sure things are workign as expected

- create a click event that toggles the value of the boolean:
```
vm.toggleShow = function(){
  // invert boolean value
  vm.showFront = !vm.showFront;
}; // end toggleShow
```

- add an ng-click event to both of your elements that use  the boolean:
```
<h2 ng-show='ai.showFront' ng-click='ai.toggleShow()'>Front</h2>
<h2 ng-hide='ai.showFront' ng-click='ai.toggleShow()'>Back</h2>
```
- test in browser

NG Intro ver 0.4
===

- update your input form to have the necessary fields
- also include a button to add the new object
```
<input type='number' ng-model='ai.yearIn' placeholder="year"/>
<input type='text' ng-model='ai.makeIn' placeholder="make"/>
<input type='text' ng-model='ai.modelIn' placeholder="model"/>
<input type='number' ng-model='ai.costIn' placeholder="cost"/>
<button ng-click="ai.addCar()">Add Car</button>
```

- bind a function in your js to the button via the controller:
```
vm.addCar = function(){
  console.log( 'in vm.addCar' );
}; //end addCar
```
- test in browser. Currently you'll only see the console log when the button is clicked
- add a variable that is an array to your controller. This is where we'll push the new objects once we get the user input through a button click:
```
vm.cars = [];
```

- update the function to take the input, create an object, and push it into the array:
```
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
```

- now that the data is in the array vm.cars, we can use ng-repeat to display the data on the DOM as ai.cars
- update your html as follows:
```
<p ng-repeat='car in ai.cars'>
  {{ car.year }} {{ car.make }} {{ car.model }} ${{ car.cost }}
</p>
```

NG Intro ver 0.5
===
- let's add a "remove" button for each car
- first, let's append a button to the DOM for each car that calls a function in the controller:
```
<p ng-repeat='car in ai.cars'>
  {{ car.year }} {{ car.make }} {{ car.model }} ${{ car.cost }} <button ng-click='ai.removeCar()'>Remove</button>
</p>
```
- now let's hook that up to an actual function in the js:
```
vm.removeCar = function(){
  console.log( 'in removeCar' );
}; //end removeCar
```
- test in browser. Each car should have a "remove" button that, when pressed, will log out "in remove car" in the browser console
- next, we'll need to know the index of the car in the array. For instance, we'll want "0" when the first car is clicked, "1" for the second, etc...
- update your ng-repeat to include $index as shown:
```
<p ng-repeat='car in ai.cars'>
  {{ car.year }} {{ car.make }} {{ car.model }} ${{ car.cost }} <button ng-click='ai.removeCar($index)'>Remove</button>
</p>
```
- $index is given to us by ng-repeat and is the index in the current array of the object being shown. n this case, the index of the car in ai.cars
- next, update your js to accept this passed argument. For now, let's just log it out to make sure we are getting what we expect:
```
vm.removeCar = function( index){
  console.log( 'in removeCar:', index );
}; //end removeCar
```
- test in browser. Add a few cars. You should now see "in removeCar: 0" when clicking the button next to the first car, "in removeCar: 1" for the second, etc...
- now that we've got the index of the car we want to remove, we can use our usual JS array built-ins to remove this object from the array:
```
vm.removeCar = function( index){
  console.log( 'in removeCar:', index );
  vm.cars.splice( index, 1 );
}; //end removeCar
```
- this will remove one object from the vm.cars array at the given index
