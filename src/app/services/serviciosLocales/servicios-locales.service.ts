import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import {catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiciosLocalesService {

  constructor(private http: HttpClient ) { }
  getAllRequest(): Observable<any>{
    return this.http.get(environment.urlBase).pipe(
      catchError(error =>{
        return throwError(error);
      })
      );
  }
}
