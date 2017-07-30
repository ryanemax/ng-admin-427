import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { ActivityService } from './activity.service'

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
      { path: '', component: ActivityListComponent, pathMatch: 'full' },
      { path: 'activity/edit/:id', component: ActivityEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   ActivityListComponent,
   ActivityItemComponent, 
   ActivityEditComponent
   ],
   providers:[ActivityService]
})
export class ActivityModule { }
