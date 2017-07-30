import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunItemComponent } from './fun-item.component';

describe('FunItemComponent', () => {
  let component: FunItemComponent;
  let fixture: ComponentFixture<FunItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
