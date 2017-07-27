// 当打包部署静态包时，需要加载本Module

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    AboutModule
  ],
})
export class SPAModule { }
