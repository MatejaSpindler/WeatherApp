import { ForecastPage } from "../forecast/forecast.page";
import { Component } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import "rxjs/add/operator/map";
import * as moment from "moment";
import { Datetime, NavController } from "@ionic/angular";
import { GetCurrentWeatherResponse } from "../models/GetCurrentWeatherResponse.model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  currentWeatherViewModel: GetCurrentWeatherResponse;
  refreshedAtDate: string;
  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.weatherService
      .getCurrentWeatherData()
      .subscribe((data: GetCurrentWeatherResponse) => {
        this.currentWeatherViewModel = data;
        this.refreshedAtDate = moment().format();
      });
  }

  getFiveDaysForcast(event: any) {
    this.navCtrl.navigateForward("/forecast");
  }
}
