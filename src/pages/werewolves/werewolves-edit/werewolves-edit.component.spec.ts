import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerewolvesEditComponent } from './werewolves-edit.component';

describe('WerewolvesEditComponent', () => {
  let component: WerewolvesEditComponent;
  let fixture: ComponentFixture<WerewolvesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerewolvesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerewolvesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
