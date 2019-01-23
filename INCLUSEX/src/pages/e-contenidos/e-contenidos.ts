  import { Component } from '@angular/core';
  import { NavController, NavParams } from 'ionic-angular';
  import {ContenidoService} from "../../providers/index.services";
  import {EContenidosDetallePage,EContenidosCrearPage} from "../index.paginas";
  @Component({
    selector: 'page-e-contenidos',
    templateUrl: 'e-contenidos.html'
    })

  export class EContenidosPage {
    pushPage= EContenidosDetallePage;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private _ps:ContenidoService) {
                  this._ps.ver_contenidos();
                  console.log(this._ps);
    }

  crear_contenido(){
    this.navCtrl.push(EContenidosCrearPage);
  }
    refrescar(refresher) {
      console.log('Begin async operation', refresher);

      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
        this._ps.ver_contenidos();
      }, 2000);
    }

  }
