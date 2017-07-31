import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { ParkListComponent } from './park-list/park-list.component';
import { ParkEditComponent } from './park-edit/park-edit.component';
import { ParkItemComponent } from './park-item/park-item.component';

// Providers
import { ParkService } from './park.service';

@NgModule({
  imports: [
    // Import Official Shared Module
    CommonModule,
    FormsModule,

    // Config Router
    RouterModule.forChild([
      { path: '', component: ParkListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: ParkEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ParkListComponent, ParkEditComponent, ParkItemComponent],
  providers:[ParkService]
})
export class ParkModule { }
