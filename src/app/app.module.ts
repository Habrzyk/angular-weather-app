import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastModule } from './modules/weather-forecast/weather-forecast.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProvider } from './interceptors/index';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { WEATHER_APP_SERVICE_STORAGE, LocalStorageService } from './services/local-storage/local-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherForecastModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    httpInterceptorProvider,
    { provide: WEATHER_APP_SERVICE_STORAGE, useExisting: LOCAL_STORAGE },
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
