import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunEditComponent } from './fun-edit.component';

describe('FunEditComponent', () => {
  let component: FunEditComponent;
  let fixture: ComponentFixture<FunEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
