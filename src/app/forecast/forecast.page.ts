import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import { NavController, NavParams } from "@ionic/angular";
import { GetWeatherForecastResponse } from "../models/GetWeatherForecastResponse.model";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.page.html",
  styleUrls: ["./forecast.page.scss"]
})
export class ForecastPage implements OnInit {
  Days5ForecastViewModel: GetWeatherForecastResponse;
  currentDateTime: string = new Date().toDateString();

  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.weatherService
      .get5DaysWeatherData()
      .subscribe((data: GetWeatherForecastResponse) => {
        console.log(data);

        this.Days5ForecastViewModel = data;
      });
  }
}
