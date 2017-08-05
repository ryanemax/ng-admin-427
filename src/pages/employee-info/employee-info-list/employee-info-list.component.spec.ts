import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoListComponent } from './employee-info-list.component';

describe('EmployeeInfoListComponent', () => {
  let component: EmployeeInfoListComponent;
  let fixture: ComponentFixture<EmployeeInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
