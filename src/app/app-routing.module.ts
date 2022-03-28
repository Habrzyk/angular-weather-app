import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const weatherRoutes: Routes = [{
    path: '', loadChildren: () => import('./modules/weather-forecast/weather-forecast.module').then(m => m.WeatherForecastModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(weatherRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
