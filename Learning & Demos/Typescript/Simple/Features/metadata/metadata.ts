import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);

// const note = Reflect.getMetadata('note', plane);

// console.log(note);

@printMetaData
class Plane {
  color: string = 'black';
  @markFunction('this is your big secret')
  fly(): void {
    console.log('air wawveses');
  }
  @markFunction('this is your small secret')
  jump(): void {
    console.log('wwwww wawveses');
  }
}
function markFunction(secretMSG: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretMSG, target, key);
  };
}
function printMetaData(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
