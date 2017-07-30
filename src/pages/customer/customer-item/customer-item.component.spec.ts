import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { customerItemComponent } from './customer-item.component';

describe('customerItemComponent', () => {
  let component: customerItemComponent;
  let fixture: ComponentFixture<customerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ customerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(customerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
