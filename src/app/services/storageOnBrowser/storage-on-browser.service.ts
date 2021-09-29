import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageOnBrowserService {
  datos: any;
  constructor() {
    if(localStorage.length<=0){
     this.datos=null;
    }
    console.log("getDatos()", this.getDatos());
  }

  getDatos(){
    return this.datos;
  }
  setDatos(datos:any){
    this.datos = datos;
  }


}
