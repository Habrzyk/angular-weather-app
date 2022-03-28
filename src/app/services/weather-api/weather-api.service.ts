import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Position } from 'src/app/models/location.model';
import { Observable } from 'rxjs';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';

@Injectable({providedIn: 'root'})
export class WeatherApiService {

  private units = 'metric';

  constructor(private http: HttpClient) { }

  getWeatherByPosition(position: Position): Observable<WeatherForecast>  {
    let params = new HttpParams();
    params = params.append('units', this.units);
    params = params.append('lat', position.lat);
    params = params.append('lon', position.lng);
    return this.http.get<WeatherForecast>('weatherApi', { params }).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error('error'))
  }
}
