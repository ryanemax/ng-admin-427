import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbsItemComponent } from './wbs-item.component';

describe('WbsItemComponent', () => {
  let component: WbsItemComponent;
  let fixture: ComponentFixture<WbsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
