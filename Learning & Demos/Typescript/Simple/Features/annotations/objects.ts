const profile = {
  name: 'bob',
  age: 36,
  coordinates: { lat: 1, lng: 42 },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;
