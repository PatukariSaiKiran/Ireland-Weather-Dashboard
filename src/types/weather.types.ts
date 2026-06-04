export type Weather = {
    location: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };

  export type ForecastDay = {
    date: string;
    maxTemp: number;
    minTemp: number;
  };