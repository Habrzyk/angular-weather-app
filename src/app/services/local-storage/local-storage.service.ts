import { Inject, Injectable, InjectionToken } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';

enum LocalStorageKeys {
    WEATHER_FORECAST_WITH_LOCATION_KEY = 'weather-forecast-with-location',
    WEATHER_FORECAST_WITH_LOCATION_LIST_KEY = 'weather-forecast-with-location-list',
    THEME_COLOR_KEY = 'theme-color'
}

export const WEATHER_APP_SERVICE_STORAGE =
    new InjectionToken<StorageService>('WEATHER_APP_SERVICE_STORAGE');

@Injectable()
export class LocalStorageService {

    constructor(@Inject(WEATHER_APP_SERVICE_STORAGE) private storage: StorageService) { }

    public setLocalStorage<Type>(key: string, arg: Type) {
        this.storage.set(LocalStorageKeys[key], arg);
    }

    public getLocalStorage<Type>(key: string): Type {
        return this.storage.get(LocalStorageKeys[key]);
    }

    public removeLocalStorage(key: string): void {
        this.storage.remove(LocalStorageKeys[key]);
    }

}