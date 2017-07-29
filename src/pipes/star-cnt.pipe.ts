import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starCnt'
})
export class StarCntPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let starString = "";
    for (var index = 0; index < value; index++) {
      starString = starString + "★";
    } 
    return starString;
  }
}
