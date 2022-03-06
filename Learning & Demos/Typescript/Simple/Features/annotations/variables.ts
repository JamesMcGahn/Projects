const apples: number = 5;
const string: string = 'fast';
const bool: boolean = false;
let much: null = null;

let now: Date = new Date();

//array
let colors: string[] = ['red', 'blue'];
let num: number[] = [1.2, 3, 45];
let bools: boolean[] = [true, false];

//classes
class Car {}

let car: Car = new Car();

// Objects
let point: { x: number; y: number } = {
  x: 10,
  y: 12,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// - fn that returns any type
// ts cannot figure out what type any is -- avoid any vars at all cost

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// declare and initalize on different line
let words = ['hi', 'hello', 'world', 'wow'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'hello') {
    foundWord = true;
  }
}

// var that type can not be inferred correctly
let numbers = [-10, 12, -1];
let numberAbove: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAbove = numbers[i];
  }
}
