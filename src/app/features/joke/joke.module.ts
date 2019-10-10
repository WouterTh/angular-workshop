import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { RandomComponent } from './views/random/random.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RandomComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JokeRoutingModule
  ]
})
export class JokeModule { }
