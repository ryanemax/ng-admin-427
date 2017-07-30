import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerewolvesItemComponent } from './werewolves-item.component';

describe('WerewolvesItemComponent', () => {
  let component: WerewolvesItemComponent;
  let fixture: ComponentFixture<WerewolvesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerewolvesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerewolvesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
