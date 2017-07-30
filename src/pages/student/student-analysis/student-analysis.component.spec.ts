import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnalysisComponent } from './student-analysis.component';

describe('StudentAnalysisComponent', () => {
  let component: StudentAnalysisComponent;
  let fixture: ComponentFixture<StudentAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
