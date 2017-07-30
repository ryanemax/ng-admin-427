import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';
import { StarCntPipe } from './star-cnt.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    TokPipe,
    StarCntPipe
  ],
  exports:[
    SexNamePipe,
    TokPipe,
    StarCntPipe
  ]
})
export class PipesModule { }
