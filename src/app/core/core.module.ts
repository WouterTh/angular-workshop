import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LoggingModule } from './logging/logging.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    LoggingModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Only import CoreModule once');
    }
  }
}
