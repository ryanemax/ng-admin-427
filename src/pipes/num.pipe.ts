import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num'
})
export class NumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value =="1"){
      return "only one"
    }else{
      return "four"
    }
  }

}
