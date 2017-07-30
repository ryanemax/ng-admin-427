import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { StockListComponent } from './stock-list/stock-list.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { StockService } from './stock.service'

@NgModule({
  declarations: [
   StockListComponent,
   StockItemComponent, 
   StockEditComponent
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
      { path: '', component:StockListComponent, pathMatch: 'full' },
      { path: 'stock/edit/:sid', component: StockEditComponent, pathMatch: 'full' }
    ])
  ],
   providers:[StockService]
})
export class StockModule { }
