import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstoreItemComponent } from './appstore-item.component';

describe('AppstoreItemComponent', () => {
  let component: AppstoreItemComponent;
  let fixture: ComponentFixture<AppstoreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstoreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
