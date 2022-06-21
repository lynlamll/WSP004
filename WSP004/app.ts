//Primitive Types - string, number, boolean.
let u: undefined = undefined; // not false or true
let n: null = null; // not false or true
console.log(u, n);

console.log(u == true);
console.log(u == false);
console.log(n == true);
console.log(n == false);

// check value && type
// backend recommend ===
console.log("undefined", n == undefined);
console.log("null", u == null);
// let undefinedObj = u + 1
let myText = null;
//

let myText2 = myText + "test";
console.log(myText2);
let myText3 = myText2;
console.log(myText3);

// declared type
let isTrue: boolean;
let numberType: number;
let text: string = "Example";

// type (without variable)
// user-defined data structure
// very similar to interface
type MyType = "myType" | "mytypeeee" | 12 | 14;

// more like an object type
interface Type {
  type: "myType";
}

let newType: Type;

// console.log(newType.type);

let mySecretType1: MyType = 12;
let mySecretType2: MyType = "myType";
let mySecretType: MyType = 14;
console.log(mySecretType);

let x = "XD";

console.log(text);

// TypeScript provides built-in types for
// both null and undefined which are defined by using their names.

// string[], number[], boolean[]
let result: string[];

const arrayOfStrings: string[] = ["a", "b", "c"];
const arrayOfNumbers: number[] = [1, 2, 3];
const arrayOfBooleans: boolean[] = [true, false];
