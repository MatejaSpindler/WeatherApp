import { ForecastPage } from "../forecast/forecast.page";
import { Component } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import "rxjs/add/operator/map";
import * as moment from "moment";
import "moment/min/locales";
import { Datetime, NavController, LoadingController } from "@ionic/angular";
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
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {}

  async ionViewWillEnter() {
    await this.presentLoading();
    await this.setWeatherData();
    this.loadingCtrl.dismiss();
  }

  async setWeatherData() {
    const currentWeatherLoad = this.setCurrentWeather();
    const day5ForecastLoadLoad = this.setFiveDaysForecast();
    await Promise.all([currentWeatherLoad, day5ForecastLoadLoad]);
  }

  async setFiveDaysForecast() {
    const data = await this.weatherService.get5DaysWeatherData().toPromise();
    this.days5ForecastViewModel = data;
  }

  async setCurrentWeather() {
    const data = await this.weatherService.getCurrentWeatherData().toPromise();
    this.currentWeatherViewModel = data;
    this.refreshedAtDate = moment().format("L");
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await loading.present();
  }

  async doRefresh(event) {
    await this.setWeatherData();
    event.target.complete();
  }
}
