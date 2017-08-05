import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProgramsService } from './programs.service';

import { ProgramMainComponent } from './program-main.component';
import { ProgramsComponent } from './programs-list/programs.component';
import { ProgramsDetailComponent } from './programs-detail/programs-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ProgramMainComponent, pathMatch: 'full' },
      { path: 'programs-detail/:sid', component: ProgramsDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ProgramMainComponent, ProgramsComponent, ProgramsDetailComponent],
  providers: [ProgramsService]
})
export class ProgramMainModule { }
