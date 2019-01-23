import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MensajeService} from "../../providers/index.services";
import {EMensajesResponderPage} from "../index.paginas";

@Component({
  selector: 'page-e-mensajes',
  templateUrl: 'e-mensajes.html',
})
export class EMensajesPage {
  rute:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _pc:MensajeService) {
              this.rute=this.navParams.get("rut");
              let rut="false";
              this._pc.cargar_todos(rut);
              console.log(this._pc);

  }
  responder_mensaje(mensaje:any) {
    console.log("osadjasd"+mensaje);
    this.navCtrl.push(EMensajesResponderPage,{mensaje:mensaje,rut:this.rute});

  }

}
