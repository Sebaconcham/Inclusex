import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-u-contenidos-detalle',
  templateUrl: 'u-contenidos-detalle.html',
})
export class UContenidosDetallePage {
  contenido: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contenido=this.navParams.get("contenido");
    console.log(this.contenido);

  }


  }
