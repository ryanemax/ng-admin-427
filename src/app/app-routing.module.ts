import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazyload模式路由，适合服务端渲染
const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'rxjs', loadChildren: '../pages/rxjs/rxjs.module#RxjsModule' },  
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
  { path: 'login', loadChildren: '../pages/user/user.module#UserModule' },
  { path: 'student', loadChildren: '../pages/student/student.module#StudentModule' },
  { path: 'werewolves', loadChildren: '../pages/werewolves/werewolves.module#WerewolvesModule' },
  { path: 'park', loadChildren: '../pages/park/park.module#ParkModule' },
  { path: 'wbs', loadChildren: '../pages/wbs/wbs.module#WBSModule' },
  { path: 'stock', loadChildren: '../pages/stock/stock.module#StockModule' },
  { path: 'customer', loadChildren: '../pages/customer/customer.module#customerModule' },
  { path: 'member', loadChildren: '../pages/member/member.module#MemberModule' },
  { path: 'program-main', loadChildren: '../pages/program-main/program-main.module#ProgramMainModule' },
  { path: 'goods', loadChildren: '../pages/goods/goods.module#GoodsModule' },
  { path: 'pokemon', loadChildren: '../pages/pokemon/pokemon.module#PokemonModule' },
  { path: 'commodity', loadChildren: '../pages/commodity/commodity.module#CommodityModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// SPA模式路由，适合客户端打包
// import { HomePageComponent } from '../pages/home/home-page/home-page.component';
// import { AboutPageComponent } from '../pages/about/about-page/about-page.component';
// import { LoginPageComponent } from '../pages/user/login-page/login-page.component';
// import { StudentListComponent } from '../pages/student/student-list/student-list.component';
// import { RxjsHomeComponent } from '../pages/rxjs/rxjs-home/rxjs-home.component';
// const SPAroutes: Routes = [
//   {
//     path: '',
//     children: []
//   },
//   { path: 'rxjs', component: RxjsHomeComponent },  
//   { path: 'home', component: HomePageComponent },
//   { path: 'about', component: AboutPageComponent },
//   { path: 'login', component: LoginPageComponent },
//   { path: 'student', component: StudentListComponent },
// ];

// 配置路由模式
const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
