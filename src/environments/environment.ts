// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  config : {
    apiKey: "AIzaSyBzv3T4uqCCt5JZRVwmg1eV4NklZWqA5pI",
    authDomain: "my-blogging-web-app.firebaseapp.com",
    databaseURL: "https://my-blogging-web-app.firebaseio.com",
    projectId: "my-blogging-web-app",
    storageBucket: "my-blogging-web-app.appspot.com",
    messagingSenderId: "97013724452"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
