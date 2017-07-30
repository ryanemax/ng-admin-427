import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsDetailComponent } from './programs-detail.component';

describe('ProgramsDetailComponent', () => {
  let component: ProgramsDetailComponent;
  let fixture: ComponentFixture<ProgramsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
