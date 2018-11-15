import { Http, HttpModule } from "@angular/http";
import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { WeatherDataService } from "../services/weather-data-service.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  providers: [WeatherDataService],
  declarations: [HomePage]
})
export class HomePageModule {}
