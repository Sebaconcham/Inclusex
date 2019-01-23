import { HttpClient } from '@angular/common/http';
import { NavParams,ViewController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../config/url.servicios";
import {AlertController} from "ionic-angular";
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
    respuesta: any;
  constructor(
              public http: HttpClient,
              private alertCtrl: AlertController) {

  }

  buscar(rut:string, contrasena:string ){
    let data = new FormData();
    data.append("rut", rut);
    data.append("contrasena", contrasena);
    let url=URL_SERVICIOS+"login";
    return this.http.post(url, data)
                    .map(resp=>{

                      this.respuesta=resp;
                      console.log(this.respuesta);


                    });

  }
}
