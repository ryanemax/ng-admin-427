import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurantListComponent } from './insurant-list.component';

describe('InsurantListComponent', () => {
  let component: InsurantListComponent;
  let fixture: ComponentFixture<InsurantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
