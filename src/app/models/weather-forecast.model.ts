export interface WeatherForecast {
  current: CurrentWeather
  daily: DailyWeather[]
  hourly: HourlyWeather[]
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
}

export interface CurrentWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[]
  wind_deg: number;
  wind_speed: number;
}

export interface DailyWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelsLike;
  temp: Temp;
  humidity: number;
  moon_phase: number;
  pressure: number;
  moonset: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  visibility: number;
  weather: Weather[]
  wind_deg: number;
  wind_speed: number;
}

export interface HourlyWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  temp: number;
  humidity: number;
  pressure: number;
  uvi: number;
  visibility: number;
  weather: Weather[]
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Weather {
  id: number;
  description: string;
  icon: string;
  main: string;
}

export interface FeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface Temp {
  day: number;
  eve: number;
  morn: number;
  night: number;
  max: number;
  min: number;
}