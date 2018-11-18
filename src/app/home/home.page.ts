import { ForecastPage } from "../forecast/forecast.page";
import { Component } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import "rxjs/add/operator/map";
import * as moment from "moment";
import "moment/min/locales";
import { Datetime, NavController } from "@ionic/angular";
import { GetCurrentWeatherResponse } from "../models/GetCurrentWeatherResponse.model";
import { GetWeatherForecastResponse } from "../models/GetWeatherForecastResponse.model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  currentWeatherViewModel: GetCurrentWeatherResponse;
  days5ForecastViewModel: GetWeatherForecastResponse;
  refreshedAtDate: string;

  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.setCurrentWeather();
    this.setFiveDaysForecast();
  }

  setFiveDaysForecast() {
    this.weatherService
      .get5DaysWeatherData()
      .subscribe((data: GetWeatherForecastResponse) => {
        this.days5ForecastViewModel = data;
      });
  }

  setCurrentWeather() {
    this.weatherService
      .getCurrentWeatherData()
      .subscribe((data: GetCurrentWeatherResponse) => {
        this.currentWeatherViewModel = data;
        this.refreshedAtDate = moment().format("L");
      });
  }
}
