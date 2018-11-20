import { environment } from "./../../environments/environment";
import { GetCurrentWeatherResponse } from "../models/GetCurrentWeatherResponse.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";
import { GetWeatherForecastResponse } from "../models/GetWeatherForecastResponse.model";

const API_URL = environment.apiUrl;
const weatherDataUrl = environment.weatherDataUrl;
const Api_KEY1 = environment.apiKey1day;
const API_KEY5 = environment.apiKey5days;
const CityId = environment.CityId;

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherData(): Observable<GetCurrentWeatherResponse> {
    return this.http.get<GetCurrentWeatherResponse>(
      `${API_URL}${weatherDataUrl}weather?id=${CityId}&APPID=${API_KEY5}&units=metric`
    );
  }

  get5DaysWeatherData(): Observable<GetWeatherForecastResponse> {
    return this.http.get<GetWeatherForecastResponse>(
      `${API_URL}${weatherDataUrl}forecast?id=${CityId}&APPID=${API_KEY5}&units=metric`
    );
  }

  getIconRoot(): string {
    return `${API_URL}img/w/`;
  }
}
