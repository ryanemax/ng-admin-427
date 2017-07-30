import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbsEditComponent } from './wbs-edit.component';

describe('WbsEditComponent', () => {
  let component: WbsEditComponent;
  let fixture: ComponentFixture<WbsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
