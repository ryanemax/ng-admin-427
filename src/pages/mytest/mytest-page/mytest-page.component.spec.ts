import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './mytest-page.component';

describe('MytestPageComponent', () => {
  let component: MytestPageComponent;
  let fixture: ComponentFixture<MytestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
