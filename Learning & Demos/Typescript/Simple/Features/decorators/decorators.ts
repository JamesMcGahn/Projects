class Boat {
  color: string = 'black';

  @testDecorator
  get formattedColor(): string {
    return `Boat color: ${this.color}`;
  }

  @logError('this your error message')
  pilot(): void {
    throw new Error();
    console.log('waves');
  }
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
new Boat().pilot();
