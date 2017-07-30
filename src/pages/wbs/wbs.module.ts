import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WbsListComponent } from './wbs-list/wbs-list.component';
import { WbsEditComponent } from './wbs-edit/wbs-edit.component';
import { WbsItemComponent } from './wbs-item/wbs-item.component';
import { WbsService } from './wbs.service';

@NgModule({
  imports: [
    CommonModule,   
    FormsModule, 
    RouterModule.forChild([
      { path: '', component: WbsListComponent, pathMatch: 'full' },
      { path: 'wbs/edit/:id', component: WbsEditComponent, pathMatch: 'full' },
      { path: 'item', component: WbsItemComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [WbsListComponent,
                 WbsEditComponent,
                 WbsItemComponent],
  providers:[WbsService]
})
export class WBSModule { }
