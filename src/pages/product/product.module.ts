import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { ProductService } from './product.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: ProductListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: ProductEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   ProductListComponent,
   ProductItemComponent, 
   ProductEditComponent
   ],
   providers:[ProductService]
})
export class ProductModule { }
