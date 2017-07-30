import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { PlayerService } from './player.service'

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
      { path: '', component: PlayerListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: PlayerEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   PlayerListComponent,
   PlayerItemComponent, 
   PlayerEditComponent
   ],
   providers:[PlayerService]
})
export class PlayerModule { }
