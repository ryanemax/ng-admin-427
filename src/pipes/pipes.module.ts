import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';
import { ProtypeNamePipe } from './protype-name.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    ProtypeNamePipe,
    TokPipe
  ],
  exports:[
    SexNamePipe,
    ProtypeNamePipe,
    TokPipe
  ]
})
export class PipesModule { }
