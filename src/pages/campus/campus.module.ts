import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { CampusListComponent } from './campus-list/campus-list.component';
import { CampusItemComponent } from './campus-item/campus-item.component';
import { CampusEditComponent } from './campus-edit/campus-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { CampusService } from './campus.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    MaterialModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: CampusListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: CampusEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   CampusListComponent,
   CampusItemComponent, 
   CampusEditComponent
   ],
   providers:[CampusService]
})
export class CampusModule { }
