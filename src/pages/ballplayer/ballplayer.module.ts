import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BallPlayerPageComponent } from './ballplayer-page/ballplayer-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: BallPlayerPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [BallPlayerPageComponent]
})
export class BallPlayerModule { }
