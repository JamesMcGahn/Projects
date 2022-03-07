class Vehicles2 {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // or can write 2 - 6 like this
  // constructor(public color: number){}

  protected honk(): void {
    console.log('beep');
  }

  public turnOff(): void {
    console.log('engine off');
  }
}

class Cars extends Vehicles2 {
  constructor(color: string) {
    super(color);
  }

  private drive(): void {
    console.log(`bye there ${this.color}`);
  }

  startDrive(): void {
    this.drive();
    this.honk();
  }
}

const smallCar = new Cars('red');
smallCar.startDrive();
smallCar.turnOff();
