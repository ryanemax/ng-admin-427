import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

import { FormsModule } from '@angular/forms';

import { PokemonService } from './pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: PokemonListComponent, pathMatch: 'full' },
      // http://localhost:4200/pokemoninfo/id
      { path: 'pokemoninfo/:id', component: PokemonInfoComponent, pathMatch: 'full'},
      { path: 'pokemonedit/:id', component: PokemonEditComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [PokemonListComponent, PokemonInfoComponent, PokemonEditComponent],

  providers:[PokemonService]
})
export class PokemonModule { }
