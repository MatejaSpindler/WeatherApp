import { ForecastPage } from "./../forecast/forecast.page";
import { Component } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import "rxjs/add/operator/map";
import { Moment, isMoment } from "moment";
import { Datetime, NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  data: any;
  forecastData: any;
  currentDate: string = new Date().toISOString();
  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.weatherService
      .getCurrentWeatherData()
      .map(res => res.json())
      .subscribe(data => {
        console.log("1day");
        console.log(data);
        this.currentDate = new Date(data.dt).toString();

        //   console.log(this.currentDate.Moment().format());
        this.data = data;
      });
  }

  getFiveDaysForcast() {
    this.forecastData = this.weatherService
      .get5DaysweatherData()
      .map(res => res.json())
      .subscribe(data => {
        console.log("5day");
        console.log(data);
      });
  }
}
