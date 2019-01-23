import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../config/url.servicios";

/*
  Generated class for the RegistrarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistrarService {
error:boolean;
mensaje:any;
usuario:any;
  constructor(public http: HttpClient) {
    console.log('Hello RegistrarProvider Provider');
  }

  registrar_usuario(data:any ){

    let url=URL_SERVICIOS+"registro/registro_usuario";
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      this.error=resp.error;
                      this.mensaje=resp.mensaje;
                    });

  }

  registrar_especialista(data:any){
    let url=URL_SERVICIOS+"registro/registro_especialista";
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      this.error=resp.error;
                      this.mensaje=resp.mensaje;
                    });
  }

  actualizar_usuario(data:aby){
    let url=URL_SERVICIOS+"registro/actualizar_usuario";
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      this.error=resp.error;
                      this.mensaje=resp.mensaje;
                    });
  }





}
