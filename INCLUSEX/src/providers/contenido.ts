import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../config/url.servicios";
import 'rxjs/add/operator/map';
@Injectable()
export class ContenidoService {
  constructor(public http: HttpClient){}
  contenidos: any[]=[];
  ver_contenidos(){
  let url= URL_SERVICIOS+"contenido/listar_contenidos/todas/todas";
  this.http.get(url)
            .subscribe(data =>{
              this.contenidos=[];
              console.log(data);
              if(data.error==false){
                this.contenidos.push(...data.mensaje);
              }
            })
  }

  crear_contenido(data:any ){
    let error:boolean;
    let mensaje:any;
    let url=URL_SERVICIOS+"contenido/crear_contenido";
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      error=resp.error;
                      mensaje=resp.mensaje;
                    });

  }
  editar_contenido(data:any){
    let error:boolean;
    let mensaje:any;
    let url=URL_SERVICIOS+"contenido/editar_contenido";
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      error=resp.error;
                      mensaje=resp.mensaje;
                    });
  }
  eliminar_contenido(data:any){
    let error:boolean;
    let mensaje:any;
    let url=URL_SERVICIOS+"contenido/eliminar_contenido";
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      error=resp.error;
                      mensaje=resp.mensaje;
                    });
  }
}
