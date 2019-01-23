import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from "../config/url.servicios";
@Injectable()
export class ListarcontenidoService{
  contenidos: any[]=[];
  constructor(public http: HttpClient) {
  this.cargar_todos();
  }

  cargar_todos(){
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



}
