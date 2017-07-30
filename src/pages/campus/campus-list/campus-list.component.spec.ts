import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusListComponent } from './campus-list.component';

describe('CampusListComponent', () => {
  let component: CampusListComponent;
  let fixture: ComponentFixture<CampusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
