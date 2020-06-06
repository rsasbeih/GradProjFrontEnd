import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVenuesComponent } from './manage-venues.component';

describe('ManageVenuesComponent', () => {
  let component: ManageVenuesComponent;
  let fixture: ComponentFixture<ManageVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
