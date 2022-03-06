const add = (a: number, b: number): number => {
  return a + b;
};

// type inferance only works on return value

const multiply = function (a: number, b: number): number {
  return 5;
};

const logs = (message: string): void => {
  console.log(message);
};

const logs2 = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'rain',
};

const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather2(todaysWeather);
