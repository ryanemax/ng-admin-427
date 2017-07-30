import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusItemComponent } from './campus-item.component';

describe('CampusItemComponent', () => {
  let component: CampusItemComponent;
  let fixture: ComponentFixture<CampusItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
