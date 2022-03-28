import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from '../../components/location-list/location-list.component';
import { LocationDetailsComponent } from '../../components/location-details/location-details.component';
import { NoPageFoundComponent } from '../../components/no-page-found/no-page-found.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
  },
  {
    path: 'location-list',         
    component: LocationListComponent,
    data: { animation: 'openClosePage' }
  },
  {
    path: 'location-details/:id',         
    component: LocationDetailsComponent,
  },
  { path: '**', component: NoPageFoundComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherForecastRoutingModule { }
