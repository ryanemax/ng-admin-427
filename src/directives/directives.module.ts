import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    HighlightDirective,
    UnlessDirective
  ],
  exports:[
    HighlightDirective,
    UnlessDirective
  ]
})
export class DirectivesModule { }
