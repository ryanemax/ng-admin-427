import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { WerewolvesListComponent } from './werewolves-list/werewolves-list.component';
import { WerewolvesItemComponent } from './werewolves-item/werewolves-item.component';
import { WerewolvesEditComponent } from './werewolves-edit/werewolves-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { WerewolvesService } from './werewolves.service'


@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    MaterialModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: WerewolvesListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: WerewolvesEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   WerewolvesListComponent,
   WerewolvesItemComponent, 
   WerewolvesEditComponent
   ],
   providers:[WerewolvesService]
})
export class WerewolvesModule { }
