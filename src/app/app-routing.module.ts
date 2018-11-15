import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "forecast",
    loadChildren: "./forecast/forecast.module#ForecastPageModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
