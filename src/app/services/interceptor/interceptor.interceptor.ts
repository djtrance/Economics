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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.debug("URL consuktada => ",request.url);
    const reqWithAuth = this.userToken=== ''? request: request.clone ({
      setHeaders: {
        'Accept': `application/json`,
        'Content-Type': `application/json`,
        'Authorization': `Bearer ${this.userToken}`
      }
  });
    return next.handle(reqWithAuth);
  }
}
