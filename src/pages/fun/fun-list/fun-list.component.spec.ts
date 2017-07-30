import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunListComponent } from './fun-list.component';

describe('FunListComponent', () => {
  let component: FunListComponent;
  let fixture: ComponentFixture<FunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
