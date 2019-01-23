import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MensajeService} from "../../providers/index.services";
import { UMensajesVerrespuestaPage} from "../index.paginas";
import { UMensajesCrearPage} from "../index.paginas";
@Component({
  selector: 'page-u-mensajes',
  templateUrl: 'u-mensajes.html',
})
export class UMensajesPage {
  rut:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private _pc:MensajeService) {
                this.rut=this.navParams.get("rut");
                this._pc.cargar_todos(this.rut);
                console.log(this._pc);

    }
    ver_mensaje(mensaje:any) {
      for(let item of this._pc.mensajes) {
        console.log(item.id+"sdos"+mensaje.id)
        if (item.id==mensaje.id) {
          item.visto_p=1;
          this._pc.visto(item).subscribe(()=>{
             console.log(this._pc.error);
             console.log(this._pc.mensaje);
           })
        }
      }
      this.navCtrl.push(UMensajesVerrespuestaPage,{mensaje:mensaje});
    }
    enviar_mensaje(){
      this.navCtrl.push(UMensajesCrearPage,{rut_e:this.rut});
    }
  }
