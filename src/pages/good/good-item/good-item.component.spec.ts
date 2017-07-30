import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodItemComponent } from './good-item.component';

describe('GoodItemComponent', () => {
  let component: GoodItemComponent;
  let fixture: ComponentFixture<GoodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
