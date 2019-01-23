import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../config/url.servicios";
import 'rxjs/add/operator/map';
@Injectable()
export class TriviasService {
  constructor(public http: HttpClient) {
  }
  trivia:any[]=[];
  pr:any[]=[];
  preguntas_r:any[]=[];
  preguntas:any[]=[];
  trivias: any[]=[];
  t_preguntas:any[]=[];
  ver_trivias(){
  let url= URL_SERVICIOS+"trivia/consultar_trivia";
  console.log("soy url"+url)
  this.http.get(url)
            .subscribe(data =>{
              this.trivias=[];
              console.log(data);
              if(data.error==false){
                this.trivias.push(...data.trivias);
              }
            })
  }
  agregar_pregunta(pregunta:any){
    this.preguntas.push(pregunta);
  }
  guardar_trivia(trivianueva:any){
    let error:boolean;
    let mensaje:any;
    let url=URL_SERVICIOS+"trivia/crear_trivia";
    return this.http.post(url,trivianueva)
                    .map(resp=>{
                          console.log(resp.error);
                          error=resp.error;
                          mensaje=resp.mensaje;
                          console.log(error);
                        });
  }

  buscar_preguntas(nombre_trivia:any){
    this.t_preguntas=[];
    this.pr=[];
    let url= URL_SERVICIOS+"trivia/consultar_preguntas";
    console.log("soy url"+url)
    this.http.post(url,nombre_trivia)
              .subscribe(data =>{
                if(data.error==false){
                  this.t_preguntas.push(...data.preguntas);
                  console.log(this.t_preguntas);
                  this.pr.push(...this.generar_random(this.t_preguntas));
                }
              })
  }
  eliminar_pregunta(id:any){
    let url=URL_SERVICIOS+"trivia/eliminar_pregunta";
    console.log(id);
      return this.http.post(url, id)
                      .map(resp=>{
                        console.log(resp);
                        this.error=resp.error;
                        this.mensaje=resp.mensaje;
                      });
  }
  guardar_pregunta(data:any){
    console.log(data);
    let error:boolean;
    let mensaje:any;
    let url=URL_SERVICIOS+"trivia/crear_pregunta";
    console.log(url);
    return this.http.post(url, data)
                    .map(resp=>{
                      console.log(resp);
                      error=resp.error;
                      mensaje=resp.mensaje;
                    });
  }
  eliminar_trivia(nombretrivia:any){
    let url=URL_SERVICIOS+"trivia/eliminar_trivia";
      return this.http.post(url, nombretrivia)
                      .map(resp=>{
                        console.log(resp);
                        this.error=resp.error;
                        this.mensaje=resp.mensaje;
                      });
  }
  vacias_preguntas(){
    this.preguntas=[];
  }
  generar_random(data:any){
    this.preguntas_r=[];

    let numeros:any[];
    let numero_random:any;
    let alternativas_r :any[]=[];
    for(let item of data){
      alternativas_r=[];
      numeros=[1,2,3,4];
      let numero_pregunta:any;
      var rand = numeros[Math.floor(Math.random() * numeros.length)];
      for (let i = 0; i <4 ; i++) {
        numero_random=Math.floor(Math.random() * numeros.length);
        numero_pregunta=numeros[numero_random];
        if(numero_pregunta==1){
          alternativas_r.push(item.alternativa_c);
        };
        if(numero_pregunta==2){
          alternativas_r.push(item.alternativa_i1);
        };
        if(numero_pregunta==3){
          alternativas_r.push(item.alternativa_i2);
        };
        if(numero_pregunta==4){
          alternativas_r.push(item.alternativa_i3);
        };
        numeros.splice(numero_random,1);
      }
      this.preguntas_r.push({'pregunta':item.pregunta,'alternativa1':alternativas_r[0],'alternativa2':alternativas_r[1],'alternativa3':alternativas_r[2],'alternativa4':alternativas_r[3]});
    }
    return this.preguntas_r;
  }

  buscar_trivia(nombretrivia:any){
    this.trivia=[];
    let url= URL_SERVICIOS+"trivia/buscar_trivia";
    console.log("soy url"+url+"nombre "+nombretrivia)
    this.http.post(url,nombretrivia)
              .subscribe(data =>{
                if(data.error==false){
                  this.trivia.push(...data.trivia);
                  console.log(this.trivia);
                }
              })
    }
}
