import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { InsurantListComponent } from './insurant-list/insurant-list.component';
import { InsurantItemComponent } from './insurant-item/insurant-item.component';
import { InsurantEditComponent } from './insurant-edit/insurant-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { InsuranceService } from './insurance.service'
import { Parse } from '../../cloud/parse'
Parse.initialize("dev","http://host.qh-class.com:2337/parse")

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
      { path: '', component: InsurantListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: InsurantEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   InsurantListComponent,
   InsurantItemComponent, 
   InsurantEditComponent
   ],
   providers:[InsuranceService]
})
export class InsuranceModule { }
