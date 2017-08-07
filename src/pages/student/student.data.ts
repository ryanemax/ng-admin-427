// Mock Data For Student Module
function makeStudents(){
  return [{
     'name':'chenlu',
     'sex':'M',
     'github':'chenlu28/chenlu-exam',
     'desc':'insurace,保险',
     'exam1': 55, // 10 10 5 5 20 5
     'exam2': 75, // 5 10 20 15 15 10
     'exam3': 50, // 10 5 10 10 15
     'exam4': 90 // 10 30 20 20 10 program-main 埃森哲之夜
    },
    {
     'name':'谢小宇',
     'sex':'F',
     'github':'f58xxy/ng-admin',
     'desc': '生命保险系统/员工信息管理',
     'exam1': 85, // 10 10 5 20 20 20 原始数据加分：修改了函数变量命名
     'exam2': 80, // 5 10 20 15 15 15
     'exam3': 75, // 10 10 10 25 20
     'exam4': 85 // 10 30 20 15 10
    },
    {
     'name':'文化利',
     'sex':'M',
     'github':'whl1979/wenhuali-admin',
     'desc':'大连市中学排名',
     'exam1': 80, // 10 10 5 20 20 15
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 75, // 10 10 10 25 20
     'exam4': 85 // 10 25 20 20 10
    },
    {
     'name':'张金友',
     'sex':'M',
     'github':'kalezhang/ng-admin',
     'exam1': 75, // 5 10 5 15 20 20 未修改README.md
     'exam2': 85, // 10 10 20 15 15 15 未修改README.md
     'exam3': 80, // 10 10 15 25 20
     'exam4': 90 // 10 35 20 20 10 // UI部分使用自定义管道、界面布局美观、使用动画效果加分
    },
    {
     'name':'高健翔',
     'sex':'M',
     'github':'JansenGao/angular',
     'exam1': 50, // 5 5 5 15 15 15 未修改readme，版本提交非项目根目录
     'exam2': 75,
     'exam3': 60,
     'exam4': 75 // 10 15 20 20 10 
    },
    {
     'name':'程基强',
     'sex':'M',
     'github':'ChengJiqiang/ChengJiQiang-ng-app',
     'desc':'汽车品牌一览',
     'exam1': 75, // 10 10 5 15 15 20
     'exam2': 80, // 10 10 20 15 10 15
     'exam3': 75, // 10 10 10 25 20
     'exam4': 65 // 10 20 10 15 10 wbs
    },
    {
     'name':'李晓珊',
     'sex':'F',
     'github':'Serenashan/serena-admin',
     'desc': '淘淘杂货铺',
     'exam1': 75, // 10 10 10 15 20 10
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 75,  // 10 10 10 25 20
     'exam4': 80 // 10 30 15 15 10 界面布局整齐，按钮样式有美化效果，但表单底色搭配不妥
    },
    {
     'name':'gudeyi',
     'sex':'M',
     'github':'gudeyi/admin',
     'exam1': 40, // 5 10 5 5 10 5 未修改readme
     'exam2': 0,
     'exam3': 0,
     'exam4': 0
    }
    ,
    {
     'name':'willwangyue',
     'sex':'M',
     'github':'willwangyue/will-ng-admin',
     'desc': '狼人杀',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 85, // 10 10 20 15 15 15
     'exam3': 80, // 10 10 15 25 20
     'exam4': 90 // 10 30 20 20 10
    },
    {
     'name':'郭兆青',
     'desc':'游戏管理系统',
     'sex':'M',
     'github':'PotStove/GuoZhaoqing-ng-app',
     'exam1': 75, // 10 10 5 15 20 15
     'exam2': 0,
     'exam3': 0,
     'exam4': 0
    },
    {
     'name':'林海广',
     'sex':'M',
     'github':'sakuraki777/haiguanglin-exam',
     'exam1': 70, // 10 10 5 15 15 15
     'exam2': 85, // 10 10 20 20 15 10
     'exam3': 60, // 10 10 15 10 15
     'exam4': 50 // 10 20 5 5 10
    },
    {
     'name':'方含',
     'sex':'F',
     'github':'fanghan06/fanghan-exam',
     'exam1': 90, // 10 10 15 20 20 15
     'exam2': 75,
     'exam3': 50,
     'exam4': 90 // program-main
    },
    {
     'name':'罗文辉',
     'sex':'M',
     'github':'Lawrence-Luo/wenhuiluo-exam',
     'exam1': 45, // 10 10 5 5 10 5
     'exam2': 70,
     'exam3': 60,
     'exam4': 70 // 10 25 15 10 10
    },
    {
     'name':'DengWQ',
     'sex':'M',
     'github':'Echo-DengWQ/AngularTrainning',
     'exam1': 55, // 5 10 5 15 15 5
     'exam2': 40,
     'exam3': 40,
     'exam4': 70 // 10 25 10 15 10 policy
    },
    {
     'name':'QuNianNian',
     'sex':'F',
     'github':'QuNianNian/quqiannan-angular2',
     'exam1': 45, // 5 10 5 10 10 5
     'exam2': 40,
     'exam3': 40,
     'exam4': 75 // 10 15 20 20 10
    },
    {
     'name':'薄宏',
     'sex':'F',
     'github':'bohongberyl/bohong_exam',
     'exam1': 80, // 5 10 15 15 20 10
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 75, // 10 10 10 25 20
     'exam4': 85 // 10 30 20 15 10 product
    },
    {
     'name':'MingZhaofang',
     'sex':'M',
     'github':'rickyming/ricky_ng_app',
     'exam1': 80, // 10 10 10 20 15 15
     'exam2': 85, // 10 10 20 15 15 15
     'exam3': 80,
     'exam4': 90 // 10 35 20 15 10
    },
    {
     'name':'Wang Jian',
     'sex':'M',
     'github':'kingsir25/ng-wangjian',
     'exam1': 80, // 10 10 10 20 15 15
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 75, // 10 10 10 25 20
     'exam4': 65 // 10 20 10 20 10
    },
    {
     'name':'潘志文',
     'sex':'M',
     'github':'dlpanzhiwen/insurance',
     'exam1': 65, // 10 10 5 10 15 15
     'exam2': 85, // 10 10 20 15 15 15
     'exam3': 80, // 10 10 15 25 20
     'exam4': 75 // 10 25 20 10 10
    },
    {
     'name':'shengnanpeng',
     'sex':'M',
     'github':'shengnanpeng/angular2Training',
     'exam1': 60, // 5 10 5 10 20 10
     'exam2': 80,
     'exam3': 75, // 10 10 10 25 20 
     'exam4': 80 // 10 20 20 20 10
    },
    {
     'name':'张勇',
     'sex':'M',
     'github':'fspuzhang/zhangyong-exam',
     'exam1': 80, // 10 10 10 20 15 15
     'exam2': 85, // 10 10 20 15 15 15
     'exam3': 60,
     'exam4': 75 // 10 25 15 15 10 stock
    },
    {
     'name':'junhong.a.huang',
     'sex':'M',
     'github':'GaryHuang2333/appStore',
     'exam1': 75, // 10 10 5 20 15 15
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 75, // 10 10 10 25 20 
     'exam4': 80 // 10 25 15 20 10
    },
    {
     'name':'wuqiong',
     'sex':'M',
     'github':'alcogol2147/myexaminespace',
     'exam1': 60, // 10 10 5 10 15 10
     'exam2': 0,
     'exam3': 0,
     'exam4': 0
    },
    {
     'name':'叶智铭',
     'sex':'M',
     'github':'HughYeah/helloworld',
     'exam1': 60, // 5 10 5 15 15 10
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 75,
     'exam4': 80 // 10 20 20 20 10
    },
    {
     'name':'马丽娜',
     'sex':'F',
     'github':'MMM123HAHA/lina-admin',
     'exam1': 80, // 10 10 5 20 15 20
     'exam2': 70,
     'exam3': 65,
     'exam4': 70 // 10 25 15 10 10
    },
    {
     'name':'张颖思',
     'sex':'F',
     'github':'carriewindzy/yingsi.zhang-exam',
     'exam1': 70, // 5 10 10 20 10 15
     'exam2': 80, // 10 10 20 15 15 10
     'exam3': 60,
     'exam4': 65 // 10 25 10 10 10 activity
    },
    {
     'name':'林树春',
     'sex':'M',
     'github':'springShuchunLin/springAdminTraining',
     'exam1': 85, // 5 10 20 20 15 15
     'exam2': 85, // 10 10 20 15 15 15
     'exam3': 85,
     'exam4': 85 // 10 40 10 15 10
    },
    {
     'name':'王越(Wendy)',
     'sex':'F',
     'github':'WangYue1012/da-mai-master',
     'exam1': 70, // 5 10 5 20 15 15
     'exam2': 85, // 10 10 20 15 15 15
     'exam3': 70,
     'exam4': 70 // 10 25 15 10 10
    }
  ];
}

export let StudentData = {
    students:makeStudents()
};
