import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { AppstoreListComponent } from './appstore-list/appstore-list.component';
import { AppstoreItemComponent } from './appstore-item/appstore-item.component';
import { AppstoreEditComponent } from './appstore-edit/appstore-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { AppstoreService } from './appstore.service'

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
      { path: '', component: AppstoreListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: AppstoreEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   AppstoreListComponent,
   AppstoreItemComponent, 
   AppstoreEditComponent
   ],
   providers:[AppstoreService]
})
export class AppstoreModule { }
