import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

// Providers
import { MovieService } from './movie.service';

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: MovieListComponent, pathMatch: 'full' },
      { path: 'edit/:sid', component: MovieEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   MovieListComponent,
   MovieItemComponent,
   MovieEditComponent
   ],
   providers: [MovieService]
})
export class MovieModule { }
