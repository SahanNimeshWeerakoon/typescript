"use strict";
let id = 5;
let company = 'Sahan Weerakoon';
let isPublished = true;
let x = "test";
let ids = [1, 2, 3];
// tuple
let person = [1, "", true];
// tuple array
let employee = [[1, 'Sahan'], [2, 'Nimesh']];
// union
let pId = "5";
pId = 5;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
const user = { id: 1, name: "" };
// Type assertions
let cid = 1;
let customerId = cid;
// Type Casting
let customerId2 = cid;
// Functions (type of the function is void if it doesnt return anything)
function addNum(x, y) {
    return x + y;
}
const user1 = {
    id: 1,
    name: "Nimesh"
};
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return ``;
    }
}
// sub class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// Generics
function getArray(arr) {
    return new Array().concat(arr);
}
let numArr = getArray([1, 2, 3]);
let strArr = getArray(['one', 'two', 'three']);
