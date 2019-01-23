import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {LoginService} from "../../providers/index.services";
import {URegistroPage} from "../index.paginas";
import {ERegistroPage} from "../index.paginas";
import {HomePage} from "../index.paginas";
import { LoginPage} from "../index.paginas";
import {AlertController} from "ionic-angular";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rut:string ="";
  contrasena:string ="";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _us:LoginService,
              private alertCtrl: AlertController){}
  ingresar(){

    this._us.buscar(this.rut,this.contrasena)
            .subscribe(()=>{
              console.log(this._us.respuesta);
              if(this._us.respuesta.error==true){
                this.alertCtrl.create({
                  title:"error al iniciar",
                  subTitle:"Usuario y/o contraseña no validos",
                  buttons:["OK"]
                }).present();
                this.navCtrl.push(LoginPage);
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
    let alert = this.alertCtrl.create({
      title: 'Ingrese codigo de especialista',
      subTitle:'Este codigo comprueba que eres un especialista, para obtenerlo envia un correo a correo@mentira.cl',
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Ingrese el codigo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');}
        },
        {
          text: 'Registrar',
          handler: data => {
            if(data.codigo=="1122"){
              this.navCtrl.push(ERegistroPage);
            }else{
              this.alertCtrl.create({
                title:"Codigo no valido",
                subTitle:"Compruebe el codigo e intente nuevamente",
                buttons:["OK"]
              }).present();
            }
          }
        }
      ]
    });
    alert.present();

  }
}
