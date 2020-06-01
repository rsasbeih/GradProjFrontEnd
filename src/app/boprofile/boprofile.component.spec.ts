import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOProfileComponent } from './boprofile.component';

describe('BOProfileComponent', () => {
  let component: BOProfileComponent;
  let fixture: ComponentFixture<BOProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
