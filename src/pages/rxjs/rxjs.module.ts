import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RxjsHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [RxjsHomeComponent]
})
export class RxjsModule { }
