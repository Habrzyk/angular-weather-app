import { Location } from "./location.model";
import { WeatherForecast } from "./weather-forecast.model";

export interface WeatherForecastWithLocation {
  weatherForecast: WeatherForecast;
  location: Location;
}