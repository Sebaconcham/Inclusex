import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { UContenidosPage } from "../index.paginas";
import { EContenidosPage } from "../index.paginas";
import { UMensajesPage } from "../index.paginas";
import { EMensajesPage } from "../index.paginas";
import { ETriviasPage } from "../index.paginas";
import { UTriviasPage } from "../index.paginas";
import { UAjustesPage } from "../index.paginas";
import { EAjustesPage } from "../index.paginas";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 datos_user: any={};
 tipo_user:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
     this.datos_user=this.navParams.get("datos_user");
     this.tipo_user=this.navParams.get("tipo_user");
  }

  ver_contenido(){
    console.log(this.tipo_user);
    if(this.tipo_user=="paciente" || this.tipo_user=="pareja"){
      this.navCtrl.push(UContenidosPage);
    }else{
      this.navCtrl.push(EContenidosPage);
    }
  }
  ver_mensajes(){
    console.log(this.tipo_user);
    if(this.tipo_user=="paciente" || this.tipo_user=="pareja"){
      this.navCtrl.push(UMensajesPage,{rut:this.datos_user.rut});
    }else{
      this.navCtrl.push(EMensajesPage,{rut:this.datos_user.rut});
    }
  }

  ver_trivias(){
    console.log(this.tipo_user);
    if(this.tipo_user=="paciente" || this.tipo_user=="pareja"){
      this.navCtrl.push(UTriviasPage,{rut:this.datos_user.rut});
    }else{
      this.navCtrl.push(ETriviasPage,{rut:this.datos_user.rut});
    }
  }
  ver_ajustes(){
    console.log(this.tipo_user);
    if(this.tipo_user=="paciente" || this.tipo_user=="pareja"){
      this.navCtrl.push(UAjustesPage,{user:this.datos_user});
    }else{
      this.navCtrl.push(EAjustesPage,{user:this.datos_user});
    }
  }
}
