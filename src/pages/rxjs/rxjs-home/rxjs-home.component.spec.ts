import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsHomeComponent } from './rxjs-home.component';

describe('RxjsHomeComponent', () => {
  let component: RxjsHomeComponent;
  let fixture: ComponentFixture<RxjsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
