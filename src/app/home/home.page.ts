import { ForecastPage } from "../forecast/forecast.page";
import { Component } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import "rxjs/add/operator/map";
import * as moment from "moment";
import "moment/min/locales";
import { Datetime, NavController, LoadingController } from "@ionic/angular";
import { GetCurrentWeatherResponse } from "../models/GetCurrentWeatherResponse.model";
import { GetWeatherForecastResponse } from "../models/GetWeatherForecastResponse.model";
import { Storage } from "@ionic/storage";

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
    public loadingCtrl: LoadingController,
    private storage: Storage
  ) {}

  async ionViewWillEnter() {
    await this.tryLoadDataFromStorage();
    await this.presentLoading();
    await this.setWeatherData();
    this.saveDataToStorage();
    this.loadingCtrl.dismiss();
  }

  saveDataToStorage() {
    this.storage.set("currentWeatherViewModel", this.currentWeatherViewModel);
    this.storage.set("days5ForecastViewModel", this.days5ForecastViewModel);
  }

  async tryLoadDataFromStorage() {
    this.currentWeatherViewModel = await this.storage.get(
      "currentWeatherViewModel"
    );
    this.days5ForecastViewModel = await this.storage.get(
      "days5ForecastViewModel"
    );
  }

  async setWeatherData() {
    const currentWeatherLoad = this.setCurrentWeather();
    const day5ForecastLoadLoad = this.setFiveDaysForecast();
    await Promise.all([currentWeatherLoad, day5ForecastLoadLoad]);
    this.refreshedAtDate = moment().format("L");
  }

  async setFiveDaysForecast() {
    const data = await this.weatherService.get5DaysWeatherData().toPromise();
    this.days5ForecastViewModel = data;
  }

  async setCurrentWeather() {
    const data = await this.weatherService.getCurrentWeatherData().toPromise();
    this.currentWeatherViewModel = data;
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
