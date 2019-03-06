"use strict";
var myName = 'TK';
var myAge = 30;
var hobbies = ['cooking', 'sports'];
var personsAge = 30;
personsAge = '31';
personsAge = false;
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
function neverReturns() {
    throw new Error('Oh No!');
}
function multiply(num1, num2) {
    return num1 * num2;
}
var myMultiply;
myMultiply = sayHello;
myMultiply = multiply;
var userData = {
    name: 'TK',
    age: 30
};
userData = {
    a: 'Sam',
    b: 100
};
var userData = {
    name: 'TK',
    age: 30
};
var foo = {
    data: [1, 2, 3],
    output: function (arg1) {
        return this.data;
    }
};
var bar = {
    data: [4, 5, 6],
    output: function (arg1) {
        return this.data;
    }
};
//# sourceMappingURL=app.js.map