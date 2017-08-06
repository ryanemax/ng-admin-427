import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyItemComponent } from './policy-item/policy-item.component';
import { PolicyEditComponent } from './policy-edit/policy-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { PolicyService } from './policy.service'

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
      { path: '', component: PolicyListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: PolicyEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   PolicyListComponent,
   PolicyItemComponent, 
   PolicyEditComponent
   ],
   providers:[PolicyService]
})
export class PolicyModule { }
