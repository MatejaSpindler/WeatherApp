// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  apiUrl: "http://api.openweathermap.org/",
  weatherDataUrl: "data/2.5/",
  apiKey1day: "7c1f8c0e539ea7f4d1d892e6a613b588",
  apiKey5days: "256a3a8e0f7b31283d5b5bc182e58409",
  CityId: "3195506",
  localeCode: "sl-SL"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
