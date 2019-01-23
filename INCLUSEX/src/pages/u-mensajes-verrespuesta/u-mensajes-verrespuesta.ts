import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-u-mensajes-verrespuesta',
  templateUrl: 'u-mensajes-verrespuesta.html',
})
export class UMensajesVerrespuestaPage {
  mensaje:any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.mensaje=this.navParams.get("mensaje");
      console.log(this.mensaje);
    }
  }
