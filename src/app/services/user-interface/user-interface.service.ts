import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserInterfaceService {

  colorsAmberClass = 'from-amber-600 to-amber-500';
  colorsBlueClass = 'from-blue-700 to-blue-600';
  colorsGreenClass ='from-green-700 to-green-600';
  defaultColorsClass = this.colorsGreenClass;
  colorThemeObs;
  errorMessageObs = new BehaviorSubject<string>('');

  constructor(private localStorageService: LocalStorageService) { 
    let colorThemeFromStorage = this.localStorageService.getThemeColor();
    this.colorThemeObs = new BehaviorSubject<string>(colorThemeFromStorage ? colorThemeFromStorage : this.defaultColorsClass);
  }

  changeThemeColor() {
    let newClassOfThemeColor = this.getNewClassOfThemeColor();
    this.localStorageService.saveThemeColor(newClassOfThemeColor);
    this.colorThemeObs.next(newClassOfThemeColor);
  }

  getNewClassOfThemeColor() {
    let currentClassOfThemeColor = this.localStorageService.getThemeColor();
    if (!currentClassOfThemeColor) {
      currentClassOfThemeColor = this.defaultColorsClass;
    }
    return currentClassOfThemeColor === this.colorsAmberClass 
      ? this.colorsBlueClass
      : currentClassOfThemeColor === this.colorsBlueClass
      ? this.colorsGreenClass
      : this.colorsAmberClass
  }

}
