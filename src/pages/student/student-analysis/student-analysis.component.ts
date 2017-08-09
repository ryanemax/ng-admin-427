import { Component, OnInit } from '@angular/core';
import {StudentService, ParseDataSource, Student} from "../student.service";

import {  Meta, Title } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-student-analysis',
  templateUrl: './student-analysis.component.html',
  styleUrls: ['./student-analysis.component.scss']
})
export class StudentAnalysisComponent implements OnInit {
    //   dataSource:ParseDataSource | null;
        students:Student[];
  constructor(meta: Meta, title: Title, private studentServ:StudentService) {
        this.students = this.studentServ.students
        // Set SEO
    title.setTitle('统计分析');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
   }
   getGood(type?){
       if(type){
           return this.students.filter(item=>item[type]>=80)
       }else{
           return this.students.filter(item=>this.getGrade(item)>=80)
       }        
   }
   getGrade(student){
       return student.exam1*0.1+student.exam2*0.2+student.exam3*0.3+student.exam4*0.4
   }

    getGradeList(type){
        let weight = {
            exam1:0.2,
            exam2:0.1,
            exam3:0.1,
            exam4:0.6,
        }
       return this.students.map(item=>item[type]*weight[type])
   }
   getStudentNameList(){
       return this.students.map(item=>item.name)
   }
  showBar(){
        // 通过dom获取指定id的内容显示区域
        let el = document.getElementById("studentBar");
        if(!el){return}        
        let myChart = echarts.init(el);
        // 设置echarts所需配置项option
        myChart.title = "堆叠条形图";
        let option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Day1', 'Day2','Day3','Day4']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: this.getStudentNameList()
    },
    series: [
        {
            name: 'Day1',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: this.getGradeList('exam1')
        },
        {
            name: 'Day2',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: this.getGradeList('exam2')
        },
        {
            name: 'Day3',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: this.getGradeList('exam3')
        },
        {
            name: 'Day4',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: this.getGradeList('exam4')
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }

  showPie(){
        // 通过dom获取指定id的内容显示区域
        let el = document.getElementById("studentPie");
        if(!el){return}
        let myChart = echarts.init(el);
        // 设置echarts所需配置项option
        let option = {
    title : {
        text: '学员区域分布',
        subtext: '2017-07-30',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['大连','上海','广州']
    },
    series : [
        {
            name: '区域分布',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:20, name:'大连'},
                {value:8, name:'上海'},
                {value:2, name:'广州'},

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }
  ngOnInit() {
    this.showBar()
    this.showPie()
  }

}
