import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { EmployeeInfoListComponent } from './employee-info-list/employee-info-list.component';
import { EmployeeInfoItemComponent } from './employee-info-item/employee-info-item.component';
import { EmployeeInfoEditComponent } from './employee-info-edit/employee-info-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { EmployeeService } from './employee-info.service'

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
      { path: '', component: EmployeeInfoListComponent, pathMatch: 'full' },
      { path: 'employee/edit/:id', component: EmployeeInfoEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    EmployeeInfoListComponent,
    EmployeeInfoItemComponent, 
    EmployeeInfoEditComponent
   ],
   providers:[EmployeeService]
})
export class EmployeeInfoModule { }
