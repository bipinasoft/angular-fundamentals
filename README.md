# AngularFundamentals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Unit Test Setup

Install the karma-cli globally:

`npm install -g karma-cli`

Additional package requirements for running the karma tests, however these are already included in the `package.json`. Only detailed for reference sake.

`npm install karma@1.3.0 karma-chrome-launcher@2.0.0 karma-jasmine@1.0.2 jasmine-core@2.5.2 @types/jasmine@2.5.38 -D`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ASP.NET Core Web API
I moved all the event and session data from the course into a SQL database and created an ASP.NET Core Web API to serve up the data. 
I will upload the db and web api project when complete.
