import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { StudentListComponent } from './werewolves-list/werewolves-list.component';
import { StudentItemComponent } from './werewolves-item/werewolves-item.component';
import { StudentEditComponent } from './werewolves-edit/werewolves-edit.component';

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
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: StudentListComponent, pathMatch: 'full' },
      { path: 'werewolves/edit/:id', component: StudentEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   StudentListComponent,
   StudentItemComponent, 
   StudentEditComponent
   ],
   providers:[WerewolvesService]
})
export class WerewolvesModule { }
