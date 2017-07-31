import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ConcertService } from '../concert.service'

@Component({
  selector: 'app-concert-edit',
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.scss']
})
export class ConcertEditComponent implements OnInit,OnDestroy {
  concertId:string="";
  concert:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getSoncertSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private concertServ:ConcertService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.concert.num = String(this.concert.num)
    this.concert.name = String(this.concert.name)
    this.concert.sale = String(this.concert.sale)
    this.concert.price = String(this.concert.price)
    this.concert.location = String(this.concert.location)
    this.concertServ.saveConcert(this.concert).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.concertServ.saveConcert(this.concert).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let num = params['num']
          if(num=="new"){
            let concert = {name:""}
            this.isNew = true;
            this.concert = concert
          }else{
            this.concertServ.getConcertById(num).subscribe(concert=>{
            console.log(concert)
            this.concert = concert
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
