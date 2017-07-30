import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("sidenav") sidenav: any;
  title = 'Cloud Admin';
  now = new Date();

  // 路由列表设置，icon名称参考地址：https://material.io/icons/
  routes:Array<any>=[
    {"path":"home","icon":"home","name":"后台首页"},
    {"path":"about","icon":"home","name":"关于我们"},
    {"path":"student","icon":"people","name":"学生管理"},
    {"path":"rxjs","icon":"android","name":"RXJS"},
    {"path":"werewolves","icon":"people","name":"狼人杀"},
    {"path":"park","icon":"local_parking","name":"介里有车位"},
    {"path":"good","icon":"thumb_up","name":"库存管理"},
    {"path":"player","icon":"people","name":"球员管理"},
    {"path":"park","icon":"people","name":"介里有车位"},
    {"path":"stock","icon":"people","name":"股票管理"},
    {"path":"product","icon":"people","name":"销售系统"},
    {"path":"employee-info","icon":"people","name":"员工信息管理"},
    {"path":"wbs","icon":"menu","name":"任务管理"},
    {"path":"customer","icon":"phone","name":"汽车保险管理"},
    {"path":"member","icon":"people","name":"程序员信息"},
    {"path":"appstore","icon":"menu","name":"appstore"},
    {"path":"goods","icon":"store","name":"淘淘杂货铺"},
    {"path":"program-main","icon":"people","name":"埃森哲之夜"},
    {"path":"fun","icon":"people","name":"基金管理"},
    {"path":"goods","icon":"android","name":"淘淘杂货铺"},
    {"path":"pokemon","icon":"people","name":"Pokemon"},
    {"path":"commodity","icon":"people","name":"商品管理"},

  ]
}
