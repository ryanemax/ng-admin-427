import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoEditComponent } from './employee-info-edit.component';

describe('EmployeeInfoEditComponent', () => {
  let component: EmployeeInfoEditComponent;
  let fixture: ComponentFixture<EmployeeInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
