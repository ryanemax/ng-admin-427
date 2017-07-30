import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';
import { StarCntPipe } from './star-cnt.pipe';
import { ProtypeNamePipe } from './protype-name.pipe';
import { NumPipe } from './num.pipe';
import { MovieCategoryPipe } from './movie-category.pipe';


@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    TokPipe,
    StarCntPipe,
    NumPipe,
    MovieCategoryPipe,
    ProtypeNamePipe,
    NumPipe
  ],
  exports:[
    SexNamePipe,
    TokPipe,
    StarCntPipe,
    NumPipe,
    MovieCategoryPipe,
    ProtypeNamePipe,
    NumPipe
  ]
})
export class PipesModule { }
