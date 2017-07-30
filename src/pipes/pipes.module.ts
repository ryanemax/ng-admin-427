import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';
import { NumPipe } from './num.pipe';
import { MovieCategoryPipe } from './movie-category.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    TokPipe,
    NumPipe,
    MovieCategoryPipe
  ],
  exports:[
    SexNamePipe,
    TokPipe,
    NumPipe,
    MovieCategoryPipe
  ]
})
export class PipesModule { }
