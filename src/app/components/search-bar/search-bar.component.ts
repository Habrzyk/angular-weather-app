import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInterfaceService } from 'src/app/services/user-interface/user-interface.service';
import { WeatherForecastWithLocationService } from 'src/app/services/weather-forecast-with-location/weather-forecast-with-location.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onSearchLocation: EventEmitter<string> = new EventEmitter();

  isNewWeatherForecastWithLocation: boolean;
  isWeatherForecastWithLocationList: boolean;
  errorMessage: string;
  
  constructor(
    private fb: FormBuilder,
    private userInterfaceService: UserInterfaceService,
    private weatherForecastWithLocationService: WeatherForecastWithLocationService
  ) { }

  locationForm = this.fb.group({
    locationName: ['', Validators.required]
  });

  ngOnInit(): void {
    this.weatherForecastWithLocationService.isNewWeatherForecastWithLocationObs
      .pipe(untilDestroyed(this))
      .subscribe((isNew: boolean) => (this.isNewWeatherForecastWithLocation = isNew));

    this.weatherForecastWithLocationService.weatherForecastWithLocationListObs
      .pipe(untilDestroyed(this))
      .subscribe((list: []) => (this.isWeatherForecastWithLocationList = list && list.length ? true : false));

    this.userInterfaceService.errorMessageObs
      .pipe(untilDestroyed(this))
      .subscribe((message: string) => (this.errorMessage = message));
  }

  onSubmit() {
    let locationName = this.locationForm.controls['locationName'].value;
    if (locationName) {
      this.onSearchLocation.emit(locationName);
    }
  }

  onAdd() {
    this.weatherForecastWithLocationService.addCurrentWeatherForecastWithLocation();
  }

  onChangeThemeColor() {
    this.userInterfaceService.changeThemeColor();
  }

  onSearchChange() {
    this.userInterfaceService.errorMessageObs.next('');
  }
}
