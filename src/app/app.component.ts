import { environment } from "./../environments/environment";
import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import * as moment from "moment";
import "moment/min/locales";
import { registerLocaleData } from "../../node_modules/@angular/common";
import localeSl from "@angular/common/locales/sl";
import localeSlExtra from "@angular/common/locales/extra/sl";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    registerLocaleData(localeSl, environment.localeCode, localeSlExtra);
    moment.locale(environment.localeCode);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
