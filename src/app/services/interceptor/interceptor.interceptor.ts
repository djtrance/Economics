import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageOnBrowserService} from '../storageOnBrowser/storage-on-browser.service'

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  private userToken : String='';
  constructor(private storage: StorageOnBrowserService) {
    this.userToken =this.storage.getDatos() === null? '' : this.storage.getDatos();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
