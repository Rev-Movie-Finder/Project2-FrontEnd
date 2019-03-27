import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { TrendingComponent } from './components/trending/trending.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'upcoming',
    component: UpcomingComponent
  }, {
    path: 'trending',
    component: TrendingComponent
  }, {
    path: 'search',
    component: SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
