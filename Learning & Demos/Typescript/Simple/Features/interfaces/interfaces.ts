interface Vechicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const civic = {
  name: 'civic',
  year: 2014,
  broken: true,
  summary(): string {
    return 'hi';
  },
};

// Long annotations with Interfaces
//  Instead of writing out -> const printVechile = (vehicle: { name: string; year: number; broken: boolean }): void => {
const printVechile = (vehicle: Vechicle): void => {
  console.log(`${vehicle.name}-${vehicle.year}-${vehicle.broken}`);
};

printVechile(civic);
