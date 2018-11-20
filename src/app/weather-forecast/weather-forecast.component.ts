import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import { List } from "../models/GetWeatherForecastResponse.model";

@Component({
  selector: "app-weather-forecast",
  templateUrl: "./weather-forecast.component.html",
  styleUrls: ["./weather-forecast.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent implements OnInit {
  @Input("weatherForecast") weatherForecastList: List;
  iconRootUrl: string;

  constructor(private weatherService: WeatherDataService) {
    this.iconRootUrl = this.weatherService.getIconRoot();
  }

  ngOnInit() {}
}
