import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkItemComponent } from './park-item.component';

describe('ParkItemComponent', () => {
  let component: ParkItemComponent;
  let fixture: ComponentFixture<ParkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
