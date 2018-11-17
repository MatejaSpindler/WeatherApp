import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import { NavController, NavParams } from "@ionic/angular";
import { GetWeatherForecastResponse } from "../models/GetWeatherForecastResponse.model";
import * as moment from "moment";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.page.html",
  styleUrls: ["./forecast.page.scss"]
})
export class ForecastPage implements OnInit {
  Days5ForecastViewModel: GetWeatherForecastResponse;

  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.weatherService
      .get5DaysWeatherData()
      .subscribe((data: GetWeatherForecastResponse) => {
        this.Days5ForecastViewModel = data;
      });
  }

  navigateToHomePage() {
    this.navCtrl.navigateForward("/home");
  }
}
