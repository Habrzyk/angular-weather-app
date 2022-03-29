import { Component, OnInit } from '@angular/core';
import { UserInterfaceService } from './services/user-interface/user-interface.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
    this.userInterfaceService.colorThemeObs
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (newColorTheme: string) => this.colorTheme = newColorTheme
      });
  }
}
