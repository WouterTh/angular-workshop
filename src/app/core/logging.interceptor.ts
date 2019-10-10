import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.logger.log(req);
    return next.handle(req).pipe(
      filter(e => e instanceof HttpResponse),
      tap(e => this.logger.log(e))
    );
  }

  constructor(private logger: LoggingService) { }
}
