import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service'

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit,OnDestroy {
  memberId:string="";
  member:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private memberServ:MemberService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }

  save(){
    this.member.name = this.member.name
    this.member.sex = Number(this.member.sex)
    this.member.age = this.member.age
    this.member.skill = this.member.skill
    this.member.expect = this.member.expect
    this.member.homepage = this.member.homepage
    this.memberServ.saveMember(this.member).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.memberServ.saveMember(this.member).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }

  ngOnInit() {
        this.route.params.subscribe(params=>{
          console.log(params)
          let id = params['sid']
          if(id=="new"){
            let member = {name:""}
            this.isNew = true;
            this.member = member
          }else{
            this.memberServ.getMemberById(id).subscribe(member=>{
            console.log(member)
            // this.studentId = student.objectId;
            this.member = member
        })
      }

    })
  }
//



  ngOnDestroy(){
    // this.getUserSubscribe.unsubscribe();
  }

  getMember(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let member = {name:""}
        this.isNew = true;
        resolve(member)
      }
      let member = this.memberServ.users.find(item=>item.index == id)
      if(member){
        resolve(member)
      }else{
        reject("member not found")
      }
    })
    return p
}

}
