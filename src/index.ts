let id: number = 5;
let company: string = 'Sahan Weerakoon';
let isPublished: boolean = true;
let x: any = "test";

let ids: number[] = [1, 2, 3];

// tuple
let person: [number, string, boolean] = [1, "", true];
// tuple array
let employee: [number, string][] = [[1, 'Sahan'], [2, 'Nimesh']]

// union
let pId: number | string = "5";
pId = 5;

// Enum
enum Direction1 {
    Up,
    Down=4,
    Left,
    Right
}
enum Direction2 {
    Up="Up",
    Down=1,
    Left,
    Right
}

// Object
type User = {
    id: number,
    name: string
}

const user: User = { id: 1, name: "" }

// Type assertions
let cid: any = 1;
let customerId = <number>cid;
// Type Casting
let customerId2 = cid as number;

// Functions (type of the function is void if it doesnt return anything)
function addNum(x: number, y: number): number {
    return x+y;
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "Nimesh"
}

// Interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x, y) => x+y;

// Classes
interface PersonInterface {
    // id: number      // Because its private, no need to include interface
    // name: string     // Because its protected no need to includ in interface
    register(): string
}

class Person implements PersonInterface {
    private id: number      // Can only be accessed within the class
    protected name: string  // Can only be accessed within the class and any supper class that extends it

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return ``;
    }
}

// sub class
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

// Generics
function getArray<T>(arr: T[]): T[] {
    return new Array().concat(arr);
}

let numArr = getArray<number>([1,2,3]);
let strArr = getArray<string>(['one', 'two', 'three']);
