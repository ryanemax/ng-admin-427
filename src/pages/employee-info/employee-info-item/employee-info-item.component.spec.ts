import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoItemComponent } from './employee-info-item.component';

describe('EmployeeInfoItemComponent', () => {
  let component: EmployeeInfoItemComponent;
  let fixture: ComponentFixture<EmployeeInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
