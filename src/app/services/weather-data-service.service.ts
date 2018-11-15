import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

const API_URL = environment.apiUrl;
const Api_KEY1 = environment.apiKey1day;
const API_KEY5 = environment.apiKey5days;
const CityId = environment.CityId;

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  constructor(public http: Http) {}

  getCurrentWeatherData() {
    return this.http.get(API_URL + "weather?q=Maribor&APPID=" + Api_KEY1);
  }

  get5DaysweatherData() {
    return this.http.get(
      API_URL + "forecast?id=" + CityId + "&APPID=" + API_KEY5
    );
  }
}
