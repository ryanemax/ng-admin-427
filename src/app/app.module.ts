import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';

// 当打包部署静态包时，需要加载本Module，当使用服务端渲染时，请注释
import { SPAModule } from '../pages/spa.module';
// import { TokPipe } from './tok.pipe';
// import { UnlessDirective } from './unless.directive';
// import { HighlightDirective } from './highlight.directive';
// import { UserItemComponent } from './user-item/user-item.component';

// 加及初始化 数据接口封装库
import { Parse } from '../cloud/parse'
Parse.initialize("dev","http://host.qh-class.com:2337/parse")
// Parse.initialize("dev","http://localhost:1337/parse")

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-lazyload-starter'}),
    AppRoutingModule,
    HttpModule,
    // Material及动画库
    MaterialModule,
    BrowserAnimationsModule,
    // 静态打包时加载
    SPAModule,
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
  // 近似的根模块，界面渲染逻辑
  // var app-root = document.getbyTagName("app-root")
  // app-root.innerHtml = Template<>
})
export class AppModule { }