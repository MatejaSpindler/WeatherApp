import { GetCurrentWeatherDataResponse } from "../models/CurrentWeatherData.model";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";
import { Days5WeatherForecast } from "../models/Days5WeatherForecast";

const API_URL = environment.apiUrl;
const Api_KEY1 = environment.apiKey1day;
const API_KEY5 = environment.apiKey5days;
const CityId = environment.CityId;

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  constructor(public http: HttpClient) {}

  getCurrentWeatherData(): Observable<GetCurrentWeatherDataResponse> {
    return this.http.get<GetCurrentWeatherDataResponse>(
      API_URL + "weather?q=Maribor&APPID=" + Api_KEY1 + "&units=metric"
    );
  }

  get5DaysweatherData(): Observable<Days5WeatherForecast> {
    return this.http.get<Days5WeatherForecast>(
      API_URL + "forecast?id=" + CityId + "&APPID=" + API_KEY5 + "&units=metric"
    );
  }
}
