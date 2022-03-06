const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 23,
};

const coke: [string, boolean, number] = ['brown', true, 40];

//type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 15];
