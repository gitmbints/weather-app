export interface Weather {
  list: ListInfo[];
  city: {
    name: string;
    country: string;
  };
}

interface ListInfo {
  dt: number;
  main: {
    pressure: number;
    humidity: number;
    temp: number;
  };
  weather: WeatherInfo[];
  wind: {
    speed: number;
  };
}

interface WeatherInfo {
  description: string;
  icon: string;
}
