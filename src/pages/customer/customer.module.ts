import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { customerListComponent } from './customer-list/customer-list.component';
import { customerItemComponent } from './customer-item/customer-item.component';
import { customerEditComponent } from './customer-edit/customer-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { customerService } from './customer.service'

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
      { path: '', component: customerListComponent, pathMatch: 'full' },
      { path: 'customer/edit/:sid', component: customerEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   customerListComponent,
   customerItemComponent, 
   customerEditComponent
   ],
   providers:[customerService]
})
export class customerModule { }
