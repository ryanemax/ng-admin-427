import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEditComponent } from './pokemon-edit.component';

describe('PokemonEditComponent', () => {
  let component: PokemonEditComponent;
  let fixture: ComponentFixture<PokemonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
