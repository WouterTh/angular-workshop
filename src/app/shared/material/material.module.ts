import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
