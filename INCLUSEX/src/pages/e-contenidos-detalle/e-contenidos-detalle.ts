import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {AlertController} from "ionic-angular";

import {ContenidoService} from "../../providers/index.services";

import {EContenidosEditarPage} from "../index.paginas";
@Component({
  selector: 'page-e-contenidos-detalle',
  templateUrl: 'e-contenidos-detalle.html'
})
export class EContenidosDetallePage {
  contenido: any={};
  pushPage= EContenidosEditarPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _co:ContenidoService,
              private alertCtrl: AlertController
              ) {
    this.contenido=this.navParams.get("contenido");
    console.log("soy un contenido "+this.contenido);
  }

  eliminar_contenido(contenido_borrar:any){
    let alert = this.alertCtrl.create({
      title: 'Esta a punto de eliminar el contenido',
      message: 'confirmar?',
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'confirmar',
          handler: () => {
            console.log(contenido_borrar);
            this._co.eliminar_contenido(contenido_borrar)
                    .subscribe(()=>{
                       console.log(this._co.error);
                       console.log(this._co.mensaje);
                       if(this._co.error==true){
                         this.alertCtrl.create({
                           title:"Error al eliminar contenido",
                           subTitle:this._co.mensaje,
                           buttons:["OK"]
                         }).present();
                       }
                       else{
                         this.alertCtrl.create({
                           title:"Contenido eliminado correctamente",
                           subTitle:this._co.mensaje,
                           buttons:["OK"]
                         }).present();

                         this.navCtrl.pop();
                       }
                     });
          }
        }
      ]
    });
    alert.present();
  }

}
