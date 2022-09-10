// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  HLS_URL: 'http://192.168.0.27:8080/hls/',
  TOKEN_NAME: 'jg-user',
  API_URL: 'http://localhost:5000/api/v1/',
  CDN_URL: 'https://ded6v3w2k2ylv.cloudfront.net/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
