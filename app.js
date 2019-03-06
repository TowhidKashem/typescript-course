"use strict";
var myName = 'TK';
var myAge = 30;
var hobbies = ['cooking', 'sports'];
var adress = ['Fake Street', 123];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Orange"] = 2] = "Orange";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Yellow"] = 101] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
function returnName() {
    return myName;
}
function sayHello() {
    console.log('Hello!');
}
function multiply(num1, num2) {
    return num1 * num2;
}
var myMultiply;
myMultiply = multiply;
