import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieCategorName'
})
export class MovieCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'Drama') {
      return '剧情';
    }
    if (value === 'Comedy') {
      return '喜剧';
    }
    if (value === 'Romance') {
      return '爱情';
    }
    if (value === 'Action') {
      return '动作';
    }
    if (value === 'Thriller') {
      return '惊悚';
    }
  }

}
