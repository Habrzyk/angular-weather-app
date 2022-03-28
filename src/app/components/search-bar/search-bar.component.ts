import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInterfaceService } from 'src/app/services/user-interface/user-interface.service';
import { WeatherForecastWithLocationService } from 'src/app/services/weather-forecast-with-location/weather-forecast-with-location.service';

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
    this.weatherForecastWithLocationService.isNewWeatherForecastWithLocationObs.subscribe((isNew) => (this.isNewWeatherForecastWithLocation = isNew));
    this.weatherForecastWithLocationService.weatherForecastWithLocationListObs.subscribe((list) => (this.isWeatherForecastWithLocationList = list && list.length ? true : false));
    this.userInterfaceService.errorMessageObs.subscribe((message) => (this.errorMessage = message));
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
