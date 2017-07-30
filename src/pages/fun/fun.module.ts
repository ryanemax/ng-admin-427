import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { FunListComponent } from './fun-list/fun-list.component';
import { FunItemComponent } from './fun-item/fun-item.component';
import { FunEditComponent } from './fun-edit/fun-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { FunService } from './fun.service'

@NgModule({
  declarations: [
   FunListComponent,
   FunItemComponent, 
   FunEditComponent
   ],
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component:FunListComponent, pathMatch: 'full' },
      { path: 'edit/:sid', component: FunEditComponent, pathMatch: 'full' }
    ])
  ],
   providers:[FunService]
})
export class FunModule { }
