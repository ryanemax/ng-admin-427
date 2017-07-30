import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerewolvesListComponent } from './werewolves-list.component';

describe('WerewolvesListComponent', () => {
  let component: WerewolvesListComponent;
  let fixture: ComponentFixture<WerewolvesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerewolvesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerewolvesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
