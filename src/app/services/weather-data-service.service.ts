import { GetCurrentWeatherResponse } from "../models/GetCurrentWeatherResponse.model";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";
import { GetWeatherForecastResponse } from "../models/GetWeatherForecastResponse.model";

const API_URL = environment.apiUrl;
const Api_KEY1 = environment.apiKey1day;
const API_KEY5 = environment.apiKey5days;
const CityId = environment.CityId;

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherData(): Promise<GetCurrentWeatherResponse> {
    return this.http
      .get<GetCurrentWeatherResponse>(
        API_URL + "weather?q=Maribor&APPID=" + Api_KEY1 + "&units=metric"
      )
      .toPromise();
  }

  get5DaysWeatherData(): Promise<GetWeatherForecastResponse> {
    return this.http
      .get<GetWeatherForecastResponse>(
        API_URL +
          "forecast?id=" +
          CityId +
          "&APPID=" +
          API_KEY5 +
          "&units=metric"
      )
      .toPromise();
  }
}
