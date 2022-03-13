class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c', 'd', 'e']);

new ArrayOfAnything(['a', 'b', 'c', 'd', 'e']); // TS will be able to figureout the type based on inference

function printAnything<T>(arr: T[]): void {
  console.log(arr);
}

printAnything<string>(['a', 'b', 'c', 'd', 'e']);
printAnything(['a', 'b', 'c', 'd', 'e']); // also works

//recommended to always add the type on generics even though its not always needed

//Generic Constraints

interface Printable {
  print(): void;
}

class House {
  print() {
    console.log('hi');
  }
}

function printHouses<T extends Printable>(arr: T[]): void {
  // by defining the interface you are guarenteeing that the print method will be available
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printHouses([1, 2, 23, 3, 2]);
printHouses([new House()]);
