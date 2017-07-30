import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAnalysisComponent } from './student-analysis/student-analysis.component'

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { StudentService } from './student.service'

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
      { path: '', component: StudentListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: StudentEditComponent, pathMatch: 'full' },
      { path: 'analysis', component: StudentAnalysisComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   StudentListComponent,
   StudentItemComponent, 
   StudentEditComponent,
   StudentAnalysisComponent,
   ],
   providers:[StudentService]
})
export class StudentModule { }
