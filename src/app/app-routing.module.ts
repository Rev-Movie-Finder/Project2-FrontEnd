import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { TrendingComponent } from './components/trending/trending.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'movies/nowplaying',
    component: HomeComponent
  }, {
    path: 'movies/upcoming',
    component: UpcomingComponent
  }, {
    path: 'movies/trending',
    component: TrendingComponent
  }, {
    path: 'movies/movie-detail',
    component: MovieDetailComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '**',
    redirectTo: 'movies/nowplaying'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
