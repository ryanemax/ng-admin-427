import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Providers
import { GoodsService } from './goods.service';

import { GoodListComponent } from './good-list/good-list.component';
import { GoodEditComponent } from './good-edit/good-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    // Config Router
    RouterModule.forChild([
      { path: '', component: GoodListComponent, pathMatch: 'full' },  
      { path: 'goods/edit/:gid', component: GoodEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [GoodListComponent, GoodEditComponent],
   providers:[GoodsService]
})
export class GoodsModule { }
