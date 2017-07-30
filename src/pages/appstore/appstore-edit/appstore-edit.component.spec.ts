import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstoreEditComponent } from './appstore-edit.component';

describe('AppstoreEditComponent', () => {
  let component: AppstoreEditComponent;
  let fixture: ComponentFixture<AppstoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstoreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
