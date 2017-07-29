import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { MemberListComponent } from './member-list/member-list.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { MemberService } from './member.service'

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
      { path: '', component: MemberListComponent, pathMatch: 'full' },
      { path: 'member/edit/:sid', component: MemberEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   MemberListComponent,
   MemberItemComponent, 
   MemberEditComponent
   ],
   providers:[MemberService]
})
export class MemberModule { }
