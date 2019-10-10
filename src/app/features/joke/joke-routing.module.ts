import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './views/random/random.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';


const routes: Routes = [{
  path: 'random',
  component: RandomComponent,
  data: {
    display: {
      text: 'Random',
      path: '/jokes/random'
    }
  }
}, {
  path: 'list',
  component: ListComponent,
  data: {
    display: {
      text: 'Favorites',
      path: '/jokes/list'
    }
  }
}, {
  path: ':id',
  component: DetailComponent
}];

export const routeToken = new InjectionToken<Routes>('joke routes', {
  providedIn: 'root',
  factory: () => routes
});

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
