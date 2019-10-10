import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './views/random/random.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';


const routes: Routes = [{
  path: 'random',
  component: RandomComponent,
}, {
  path: 'list',
  component: ListComponent,
}, {
  path: ':id',
  component: DetailComponent
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
