import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import { NavController, NavParams } from "@ionic/angular";
import { Days5WeatherForecast } from "../models/Days5WeatherForecast";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.page.html",
  styleUrls: ["./forecast.page.scss"]
})
export class ForecastPage implements OnInit {
  Days5ForecastViewModel: Days5WeatherForecast;
  currentDateTime: string = new Date().toDateString();

  constructor(
    private weatherService: WeatherDataService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.weatherService
      .get5DaysweatherData()
      .subscribe((data: Days5WeatherForecast) => {
        console.log(data);

        this.Days5ForecastViewModel = data;
      });
  }
}
