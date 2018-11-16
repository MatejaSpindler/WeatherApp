import { ForecastPage } from "../forecast/forecast.page";
import { Component } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import "rxjs/add/operator/map";
import { Moment, isMoment } from "moment";
import { Datetime, NavController } from "@ionic/angular";
import { GetCurrentWeatherDataResponse } from "../models/CurrentWeatherData.model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  currentWeatherViewModel: GetCurrentWeatherDataResponse;
  moment: Moment;
  refreshedAtDate: string;
  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.weatherService
      .getCurrentWeatherData()
      .subscribe((data: GetCurrentWeatherDataResponse) => {
        this.currentWeatherViewModel = data;
        this.refreshedAtDate = new Date().toISOString();
        console.log(new Date());
        console.log(this.refreshedAtDate);
      });
  }

  getFiveDaysForcast(event: any) {
    this.navCtrl.navigateForward("/forecast");
  }
}
