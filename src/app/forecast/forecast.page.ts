import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "../services/weather-data-service.service";
import { NavController, NavParams } from "@ionic/angular";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.page.html",
  styleUrls: ["./forecast.page.scss"]
})
export class ForecastPage implements OnInit {
  forecast: any;

  constructor(public navCtrl: NavController, public navParameters: NavParams) {
    console.log("5 days forecast!");
    console.log(navParameters.get("val"));

    this.forecast = navParameters.get("val");
  }

  ngOnInit() {}
}
