import { Inject, Injectable, InjectionToken } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';
import { WeatherForecastWithLocation } from 'src/app/models/weather-forecast-with-location.model';

const WEATHER_FORECAST_WITH_LOCATION_KEY = 'weather-forecast-with-location';
const WEATHER_FORECAST_WITH_LOCATION_LIST_KEY = 'weather-forecast-with-location-list';
const THEME_COLOR_KEY = 'theme-color';

export const WEATHER_APP_SERVICE_STORAGE =
    new InjectionToken<StorageService>('WEATHER_APP_SERVICE_STORAGE');

@Injectable()
export class LocalStorageService {

    constructor(@Inject(WEATHER_APP_SERVICE_STORAGE) private storage: StorageService) { }

    public saveThemeColor(newThemeColor: string): void {
        this.storage.set(THEME_COLOR_KEY, newThemeColor);
    }

    public getThemeColor(): string {
        return this.storage.get(THEME_COLOR_KEY);
    }

    public getWeatherForecastWithLocation(): WeatherForecastWithLocation {
        return this.storage.get(WEATHER_FORECAST_WITH_LOCATION_KEY);
    }

    public getWeatherForecastWithLocationList(): WeatherForecastWithLocation[] {
        let list = this.storage.get(WEATHER_FORECAST_WITH_LOCATION_LIST_KEY);
        return list ? list : [];
    }

    public addWeatherForecastWithLocation(newWeatherForecastWithLocation: WeatherForecastWithLocation): WeatherForecastWithLocation {
        this.storage.set(WEATHER_FORECAST_WITH_LOCATION_KEY, newWeatherForecastWithLocation);
        return newWeatherForecastWithLocation;
    }

    public setWeatherForecastWithLocationList(weatherForecastWithLocationList: WeatherForecastWithLocation[]): WeatherForecastWithLocation[] {
        this.storage.set(WEATHER_FORECAST_WITH_LOCATION_LIST_KEY, weatherForecastWithLocationList);
        return weatherForecastWithLocationList;
    }

    public removeWeatherForecastWithLocation(): void {
        this.storage.remove(WEATHER_FORECAST_WITH_LOCATION_KEY);
    }
}