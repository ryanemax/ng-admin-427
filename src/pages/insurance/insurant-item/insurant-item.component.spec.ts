import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurantItemComponent } from './insurant-item.component';

describe('InsurantItemComponent', () => {
  let component: InsurantItemComponent;
  let fixture: ComponentFixture<InsurantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
