import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { customerEditComponent } from './customer-edit.component';

describe('customerEditComponent', () => {
  let component: customerEditComponent;
  let fixture: ComponentFixture<customerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ customerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(customerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
