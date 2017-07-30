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
  routes:Array<any>=[
    {"path":"home","icon":"home","name":"后台首页"},
    {"path":"about","icon":"home","name":"关于我们"},
    {"path":"student","icon":"people","name":"学生管理"},
    {"path":"rxjs","icon":"android","name":"RXJS"},
    {"path":"werewolves","icon":"people","name":"狼人杀"},
  ]
}
