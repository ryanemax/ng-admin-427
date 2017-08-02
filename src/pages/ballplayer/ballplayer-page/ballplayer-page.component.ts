import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BallPlayer } from '../ballplayer';

@Component({
  selector: 'app-ballplayer-page',
  templateUrl: './ballplayer-page.component.html',
  styleUrls: ['./ballplayer-page.component.scss']
})
export class BallPlayerPageComponent implements OnInit {
  isDeletedList:Array<boolean>;
  ballplayers:Array<BallPlayer> = [
    {"no":5,
    "name":"木暮公延",
      "alias":"四眼田鸡、四眼哥哥、眼镜兄",
      "height":178,
      "weight":62,
      "position":"小前锋"},
    {"no":4,
    "name":"赤木刚宪",
      "alias":"大猩猩",
      "height":197,
      "weight":90,
      "position":"中锋"},
    {"no":11,
    "name":"流川枫",
      "alias":"狐狸、超级新秀",
      "height":187,
      "weight":75,
      "position":"小前锋"},
    {"no":7,
    "name":"宫城良田",
      "alias":"小宫、良亲、电光石火、神奈川县首席后卫",
      "height":168,
      "weight":59,
      "position":"控球后卫"},
    {"no":10,
    "name":"樱木花道",
      "alias":"白痴、笨蛋、篮板王、单纯王、退场王、红毛猴子",
      "height":189,
      "weight":83,
      "position":"大前锋"},
    {"no":14,
    "name":"三井寿",
      "alias":"三井、炎之男、寿寿、小三",
      "height":184,
      "weight":70,
      "position":"得分后卫"},
  ]
deletePlayer(){
  // let deletePlayerList = this.users.filter(users=>users.isDeleted=true)
  // console.log(this.isDeletedList);
  alert(this.isDeletedList);
  // this.users.pop()
}

code = 'A'
index = 15

saveNewBallPlayer(){
  this.ballplayers.push({
     "no":this.index,
      "name":"新人" + this.code,
      "alias":"神秘男子" + this.code,
      "height":180,
      "weight":70,
      "position":"中锋"
  })
  this.code=String.fromCharCode(this.code.charCodeAt(0)+1)
  this.index+=1
}

  sortList(type){
    if(type == "asc") {
      this.sortByAsccending();
    } else if(type == "desc") {
      this.sortByDesccending();
    } else {
      this.sortByRadom();
    }
  }

  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.ballplayers.sort(function(a, b) {
  if (a.no < b.no) {
    return -1;
  }
  if (a.no > b.no) {
    return 1;
  }
  // a must be equal to b
  return 0;
});
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
        this.ballplayers.sort(function(a, b) {
  if (a.no < b.no) {
    return 1;
  }
  if (a.no > b.no) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
  }
  sortByRadom(){
    let radom, tmp, len = this.ballplayers.length;
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    for (let index = 0; index < len; index++) {
      radom = Math.floor(Math.random() * (len-index)) + index;
      if (radom != index) {
        tmp = this.ballplayers[index];
        this.ballplayers[index] = this.ballplayers[radom];
        this.ballplayers[radom] = tmp;
      }
    }
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
