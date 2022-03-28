import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedForecastComponent } from './detailed-forecast.component';

describe('DetailsCardComponent', () => {
  let component: DetailedForecastComponent;
  let fixture: ComponentFixture<DetailedForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
