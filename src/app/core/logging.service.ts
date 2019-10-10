import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log = (message: any, ...params) => console.log(message, ...params);
}
