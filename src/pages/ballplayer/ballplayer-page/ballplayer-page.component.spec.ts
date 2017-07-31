import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallPlayerPageComponent } from '../ballplayer-page.component';

describe('BallPlayerPageComponent', () => {
  let component: BallPlayerPageComponent;
  let fixture: ComponentFixture<BallPlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallPlayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
