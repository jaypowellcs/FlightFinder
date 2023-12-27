import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFinderComponent } from './trip-finder.component';

describe('TripFinderComponent', () => {
  let component: TripFinderComponent;
  let fixture: ComponentFixture<TripFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripFinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
