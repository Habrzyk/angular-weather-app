import { Component, OnInit } from '@angular/core';
import { UserInterfaceService } from './services/user-interface/user-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'weather-kamilek-app';
  colorTheme: string;

  constructor(
    private userInterfaceService: UserInterfaceService
    ) { }

  ngOnInit(): void {
    this.userInterfaceService.colorThemeObs.subscribe({
      next: (newColorTheme) => this.colorTheme = newColorTheme
    });
  }
}
