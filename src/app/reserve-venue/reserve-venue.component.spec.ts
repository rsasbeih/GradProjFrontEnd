import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveVenueComponent } from './reserve-venue.component';

describe('ReserveVenueComponent', () => {
  let component: ReserveVenueComponent;
  let fixture: ComponentFixture<ReserveVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
