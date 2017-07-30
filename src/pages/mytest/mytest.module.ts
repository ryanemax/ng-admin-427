import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MytestPageComponent } from './mytest-page/mytest-page.component'

@NgModule({
  declarations:   [
    MytestPageComponent,
  ],
  imports: [
    // Import Official Shared Module
    CommonModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: MytestPageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[]
})
export class MytestModule { }
