import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { WeatherForecastWithLocation } from 'src/app/models/weather-forecast-with-location.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { Location } from 'src/app/models/location.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastWithLocationService {

  weatherForecastWithLocationListObs;
  isNewWeatherForecastWithLocationObs;

  constructor(private localStorageService: LocalStorageService) {

    let weatherForecastWithLocationList = this.getWeatherForecastWithLocationList()
    this.weatherForecastWithLocationListObs = new BehaviorSubject<WeatherForecastWithLocation[]>(weatherForecastWithLocationList && weatherForecastWithLocationList.length ? weatherForecastWithLocationList : <WeatherForecastWithLocation[]>[]);
    
    let weatherForecastWithLocation = this.getWeatherForecastWithLocation()
    this.isNewWeatherForecastWithLocationObs = new BehaviorSubject<boolean>(this.checkIsNewWeatherForecastWithLocation(weatherForecastWithLocation));
  }

  public addNewWeatherForecastWithLocation(weatherForecast: WeatherForecast, location: Location): WeatherForecastWithLocation {
    let newWeatherForecastWithLocation = <WeatherForecastWithLocation>{weatherForecast: weatherForecast, location: location};
    this.setWeatherForecastWithLocation(newWeatherForecastWithLocation);
    this.isNewWeatherForecastWithLocationObs.next(this.checkIsNewWeatherForecastWithLocation(newWeatherForecastWithLocation));
    return newWeatherForecastWithLocation;
  }

  public addCurrentWeatherForecastWithLocation(): WeatherForecastWithLocation {

    let weatherForecastWithLocation = this.getWeatherForecastWithLocation();
    let weatherForecastWithLocationList = this.getWeatherForecastWithLocationList();

    if (!weatherForecastWithLocationList?.some(item => item?.location.id === weatherForecastWithLocation.location.id)) {
      weatherForecastWithLocationList.push(weatherForecastWithLocation);
        this.setWeatherForecastWithLocationList(weatherForecastWithLocationList);

        this.weatherForecastWithLocationListObs.next(weatherForecastWithLocationList);

        this.removeWeatherForecastWithLocation();
        this.isNewWeatherForecastWithLocationObs.next(false);
    }
    return weatherForecastWithLocation;
  }

  public removeWeatherForecastWithLocationFromList(id: string): void {
    let weatherForecastWithLocationList = this.getWeatherForecastWithLocationList()
    weatherForecastWithLocationList = weatherForecastWithLocationList.filter(item => item.location.id !== id);
    this.setWeatherForecastWithLocationList(weatherForecastWithLocationList);
    this.weatherForecastWithLocationListObs.next(weatherForecastWithLocationList);
  }

  public findWeatherForecastWithLocation(id: string): WeatherForecastWithLocation {
    let weatherForecastWithLocationList = this.getWeatherForecastWithLocationList()
    let weatherForecastWithLocation = weatherForecastWithLocationList ? weatherForecastWithLocationList.find(item => item.location.id === id) : null;
    if (!weatherForecastWithLocation) {
      weatherForecastWithLocation = this.getWeatherForecastWithLocation()
    }
    return weatherForecastWithLocation;
  }

  private checkIsNewWeatherForecastWithLocation(weatherForecastWithLocation: WeatherForecastWithLocation): boolean {
    let weatherForecastWithLocationList = this.getWeatherForecastWithLocationList()
    return weatherForecastWithLocation && !weatherForecastWithLocationList.some(item => item && weatherForecastWithLocation && item.location.id === weatherForecastWithLocation.location.id);
  }

  private getWeatherForecastWithLocation(): WeatherForecastWithLocation {
    return this.localStorageService.getLocalStorage<WeatherForecastWithLocation>('WEATHER_FORECAST_WITH_LOCATION_KEY');
  }

  private getWeatherForecastWithLocationList(): WeatherForecastWithLocation[] {
    return this.localStorageService.getLocalStorage<WeatherForecastWithLocation[]>('WEATHER_FORECAST_WITH_LOCATION_LIST_KEY');
  }

  private setWeatherForecastWithLocation(weatherForecastWithLocation: WeatherForecastWithLocation): void {
    this.localStorageService.setLocalStorage<WeatherForecastWithLocation>('WEATHER_FORECAST_WITH_LOCATION_KEY', weatherForecastWithLocation);
  }

  private setWeatherForecastWithLocationList(weatherForecastWithLocationList: WeatherForecastWithLocation[]): void {
    this.localStorageService.setLocalStorage<WeatherForecastWithLocation[]>('WEATHER_FORECAST_WITH_LOCATION_LIST_KEY', weatherForecastWithLocationList);
  }

  private removeWeatherForecastWithLocation(): void {
    this.localStorageService.removeLocalStorage('WEATHER_FORECAST_WITH_LOCATION_KEY');
  }
}
