import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { RandomComponent } from './views/random/random.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { SharedModule } from '../../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    RandomComponent,
    ListComponent,
    DetailComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JokeRoutingModule
  ]
})
export class JokeModule { }
