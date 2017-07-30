import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { CustomerService } from './customer.service'

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
      { path: '', component: CustomerListComponent, pathMatch: 'full' },
      { path: 'edit/:sid', component: CustomerEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   CustomerListComponent,
   CustomerItemComponent, 
   CustomerEditComponent
   ],
   providers:[CustomerService]
})
export class CustomerModule { }
