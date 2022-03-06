const carmakers = ['ford', 'chevy', 'honda'];

const trucks: string[] = [];
const hybrids: string[][] = [];

const carsByMake = [['f150'], ['camaro'], ['pilot']];

// help with inference when extracting values
const cars = carmakers[1];

// prevent incompatible values
// carmakers.push(100)

// help with map`
carmakers.map((car: string): string => {
  return car.toLowerCase();
});

// flexible types
const importantDates = [new Date(), '2010-12-01'];
const importantDates2: (Date | String)[] = [];
