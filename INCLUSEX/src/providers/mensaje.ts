import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../config/url.servicios";

/*
  Generated class for the MensajeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MensajeService {

  mensajes:any[]=[];
  constructor(public http: HttpClient) {

  }


  cargar_todos(rut:any){
  this.mensajes=[];
  console.log('soy ell rut'+rut);
  let url= URL_SERVICIOS+"/mensaje/listar_mensajes/"+rut;
  console.log(url);
  this.http.get(url)
            .subscribe(data =>{
              console.log(data);
              if(data.error==false){
                this.mensajes.push(...data.mensaje);
                console.log(this.mensajes);
              }
            })
  }

  enviar_mensaje(data:any){
  let url=URL_SERVICIOS+"mensaje/enviar_mensaje";
  console.log(data);
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      this.error=resp.error;
                      this.mensaje=resp.mensaje;
                    });

  }

  visto(data:any){
  console.log(data);
  let url=URL_SERVICIOS+"mensaje/visto_p";
    return this.http.post(url, data);

  }
  responder_mensaje(data:any){
  let url=URL_SERVICIOS+"mensaje/responder_mensaje";
  console.log(data);
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      this.error=resp.error;
                      this.mensaje=resp.mensaje;
                    });

  }

  }
