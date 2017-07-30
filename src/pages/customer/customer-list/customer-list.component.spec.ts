import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { customerListComponent } from './customer-list.component';

describe('customerListComponent', () => {
  let component: customerListComponent;
  let fixture: ComponentFixture<customerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ customerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(customerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
