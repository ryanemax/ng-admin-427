import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

import { LeavePageComponent } from './leave-page/leave-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LeaveService } from './leave.service';

const routes: Routes = [
  {
    path: '',
    component: LeavePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: EditPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: EditPageComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeavePageComponent, EditPageComponent],
  providers: [LeaveService]
})
export class LeaveModule { }
