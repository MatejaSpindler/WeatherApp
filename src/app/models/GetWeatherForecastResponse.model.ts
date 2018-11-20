import { Weather, Clouds, Wind, Coord } from "./Weather.model";

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Sys {
  pod: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain: any;
  sys: Sys;
  dt_txt: string;
  snow: any;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
}

export interface GetWeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
