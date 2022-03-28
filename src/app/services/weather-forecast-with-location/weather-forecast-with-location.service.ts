import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { WeatherForecastWithLocation } from 'src/app/models/weather-forecast-with-location.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { Location } from 'src/app/models/location.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastWithLocationService {

  weatherForecastWithLocationListObs;
  isNewWeatherForecastWithLocationObs;

  constructor(private localStorageService: LocalStorageService) {

    let weatherForecastWithLocationList = this.localStorageService.getWeatherForecastWithLocationList();
    this.weatherForecastWithLocationListObs = new BehaviorSubject<WeatherForecastWithLocation[]>(weatherForecastWithLocationList && weatherForecastWithLocationList.length ? weatherForecastWithLocationList : <WeatherForecastWithLocation[]>[]);

    let weatherForecastWithLocation = this.localStorageService.getWeatherForecastWithLocation();
    this.isNewWeatherForecastWithLocationObs = new BehaviorSubject<boolean>(this.checkIsNewWeatherForecastWithLocation(weatherForecastWithLocation));
  }

  public addNewWeatherForecastWithLocation(weatherForecast: WeatherForecast, location: Location): WeatherForecastWithLocation {
    let newWeatherForecastWithLocation = <WeatherForecastWithLocation>{weatherForecast: weatherForecast, location: location};
    this.localStorageService.addWeatherForecastWithLocation(newWeatherForecastWithLocation);
    this.isNewWeatherForecastWithLocationObs.next(this.checkIsNewWeatherForecastWithLocation(newWeatherForecastWithLocation));
    return newWeatherForecastWithLocation;
  }

  public addCurrentWeatherForecastWithLocation(): WeatherForecastWithLocation {

    let weatherForecastWithLocation = this.localStorageService.getWeatherForecastWithLocation();
    let weatherForecastWithLocationList = this.localStorageService.getWeatherForecastWithLocationList();

    if (!weatherForecastWithLocationList.some(item => item && item.location.id === weatherForecastWithLocation.location.id)) {
      weatherForecastWithLocationList.push(weatherForecastWithLocation);
        this.localStorageService.setWeatherForecastWithLocationList(weatherForecastWithLocationList);
        this.weatherForecastWithLocationListObs.next(weatherForecastWithLocationList);

        this.localStorageService.removeWeatherForecastWithLocation();
        this.isNewWeatherForecastWithLocationObs.next(false);
    }
    return weatherForecastWithLocation;
  }

  public removeWeatherForecastWithLocationFromList(id: string): void {
    let weatherForecastWithLocationList = this.localStorageService.getWeatherForecastWithLocationList();
    weatherForecastWithLocationList = weatherForecastWithLocationList.filter(item => item.location.id !== id);
    this.localStorageService.setWeatherForecastWithLocationList(weatherForecastWithLocationList);
    this.weatherForecastWithLocationListObs.next(weatherForecastWithLocationList);
  }

  public getWeatherForecastWithLocation(id: string): WeatherForecastWithLocation {
    let weatherForecastWithLocationList = this.localStorageService.getWeatherForecastWithLocationList();
    let weatherForecastWithLocation = weatherForecastWithLocationList ? weatherForecastWithLocationList.find(item => item.location.id === id) : null;
    if (!weatherForecastWithLocation) {
      weatherForecastWithLocation = this.localStorageService.getWeatherForecastWithLocation();
    }
    return weatherForecastWithLocation;
  }

  private checkIsNewWeatherForecastWithLocation(weatherForecastWithLocation: WeatherForecastWithLocation): boolean {
    let weatherForecastWithLocationList = this.localStorageService.getWeatherForecastWithLocationList();
    return weatherForecastWithLocation && !weatherForecastWithLocationList.some(item => item && weatherForecastWithLocation && item.location.id === weatherForecastWithLocation.location.id);
  }
}
