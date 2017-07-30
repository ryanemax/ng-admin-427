import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurantEditComponent } from './insurant-edit.component';

describe('InsurantEditComponent', () => {
  let component: InsurantEditComponent;
  let fixture: ComponentFixture<InsurantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
