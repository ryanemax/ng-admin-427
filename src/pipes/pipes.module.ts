import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';
import { NumPipe } from './num.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    TokPipe,
    NumPipe
  ],
  exports:[
    SexNamePipe,
    TokPipe,
    NumPipe
  ]
})
export class PipesModule { }
