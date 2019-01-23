import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {LoginService} from "../../providers/index.services";
import {URegistroPage} from "../index.paginas";
import {ERegistroPage} from "../index.paginas";
import {HomePage} from "../index.paginas";
import {AlertController} from "ionic-angular";
@Component({
  selector: 'page-iniciarsesion',
  templateUrl: 'iniciarsesion.html',
})
export class IniciarsesionPage {
  rut:string ="";
  contrasena:string ="";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _us:LoginService,
              private alertCtrl: AlertController
            ) {
  }
  ingresar(){
    this._us.buscar(this.rut,this.contrasena)
            .subscribe(()=>{
              console.log(this._us.respuesta);
              if(this._us.respuesta.error==true){
                //this.contenidos.push(...resp.mensaje);
                this.alertCtrl.create({
                  title:"error al iniciar",
                  subTitle:"sapdksad",
                  buttons:["OK"]
                }).present();
                this.navCtrl.push(IniciarsesionPage);
              }else{
                  this.navCtrl.setRoot(HomePage,{tipo_user:this._us.respuesta.tipo_usuario,
                                                datos_user:this._us.respuesta.mensaje});


                }


            });


  }
  registrop(){
    this.navCtrl.push(URegistroPage);
  }
  registroe(){
    this.navCtrl.push(ERegistroPage);
  }
}
