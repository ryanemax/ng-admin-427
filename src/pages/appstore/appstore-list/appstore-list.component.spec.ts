import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstoreListComponent } from './appstore-list.component';

describe('AppstoreListComponent', () => {
  let component: AppstoreListComponent;
  let fixture: ComponentFixture<AppstoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
