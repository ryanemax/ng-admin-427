import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SexNamePipe } from '../../app/sex-name.pipe';
import { UserItemComponent } from './user-item/user-item.component';

import { FormsModule } from '@angular/forms';

import { UserService } from './user.service'

@NgModule({
  declarations:   [
    HomePageComponent,
    SexNamePipe,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[UserService]
})
export class HomeModule { }
