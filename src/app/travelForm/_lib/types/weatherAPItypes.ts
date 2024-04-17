const openWeatherResponse = {
  coord: { lon: -74.006, lat: 40.7127 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: 287.39,
    feels_like: 286.25,
    temp_min: 284.79,
    temp_max: 289.83,
    pressure: 1023,
    humidity: 53,
  },
  visibility: 10000,
  wind: { speed: 5.66, deg: 50 },
  clouds: { all: 0 },
  dt: 1713361234,
  sys: {
    type: 2,
    id: 2008101,
    country: "US",
    sunrise: 1713348797,
    sunset: 1713397033,
  },
  timezone: -14400,
  id: 5128581,
  name: "New York",
  cod: 200,
};

export type weatherTypes = typeof openWeatherResponse;

export type getLocationTypes = {
  lat: number;
  lon: number;
  country: string;
  state: string;
};
