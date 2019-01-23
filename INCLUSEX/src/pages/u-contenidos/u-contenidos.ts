import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContenidoService} from "../../providers/index.services";
import { UContenidosDetallePage} from "../index.paginas";
@Component({
  selector: 'page-u-contenidos',
  templateUrl: 'u-contenidos.html',
})
export class UContenidosPage {
  pushPage= UContenidosDetallePage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _pc:ContenidoService){
    this._pc.ver_contenidos();
  }
}
