import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { GoodListComponent } from './good-list/good-list.component';
import { GoodItemComponent } from './good-item/good-item.component';
import { GoodEditComponent } from './good-edit/good-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'
import {MdSelectModule,MdButtonModule} from '@angular/material';


// Providers
import { GoodService } from './good.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    MdSelectModule,
    MdButtonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: GoodListComponent, pathMatch: 'full' },
      { path: 'good/edit/:sid', component: GoodEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   GoodListComponent,
   GoodItemComponent, 
   GoodEditComponent
   ],
   providers:[GoodService]
})
export class GoodModule { }
