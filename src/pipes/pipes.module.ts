import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';
import { ProtypeNamePipe } from './protype-name.pipe';
import { NumPipe } from './num.pipe';


@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    TokPipe,
    ProtypeNamePipe,
    NumPipe
  ],
  exports:[
    SexNamePipe,
    TokPipe,
    ProtypeNamePipe,
    NumPipe
  ]
})
export class PipesModule { }
