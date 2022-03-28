import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserInterfaceService } from '../user-interface/user-interface.service';
import { Observable } from 'rxjs';
import { LocationFromApi } from 'src/app/models/location.model';

@Injectable({providedIn: 'root'})
export class GeocodeApiService {

  constructor(
    private http: HttpClient,
    private userInterfaceService: UserInterfaceService
  ) { }

  getLocation(locationName: string): Observable<LocationFromApi> {
    let params = new HttpParams();
    params = params.append('q', locationName);
    return this.http.get<LocationFromApi>('hereApi', {params}).pipe(
      tap(response => !response.items.length ? this.userInterfaceService.errorMessageObs.next('Location was not found...') : ''),
      catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error('error'))
  }
}
