import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import {TriviasService} from "../../providers/index.services";
import { ETriviasCrearpreguntaPage} from "../index.paginas";
@Component({
  selector: 'page-e-trivias-detalle',
  templateUrl: 'e-trivias-detalle.html',
})
export class ETriviasDetallePage {
nombre_trivia:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _pr:TriviasService,
              private alertCtrl: AlertController) {
    this.nombre_trivia=this.navParams.get('nombretrivia');
    console.log(this.nombre_trivia);
    this._pr.buscar_preguntas(this.nombre_trivia);
  }

  eliminar_pregunta(id:any){
    this._pr.eliminar_pregunta(id)
                  .subscribe(()=>{
                     console.log(this._pr.error);
                     console.log(this._pr.mensaje);
                    });
    this._pr.buscar_preguntas(this.nombre_trivia);
  }
  agregar_pregunta(){
      this.navCtrl.push(ETriviasCrearpreguntaPage,{nombretrivia:this.nombre_trivia});
    }
  eliminar_trivia(){
    let alert = this.alertCtrl.create({
    title: 'Eliminar trivia',
    message: 'Esta seguro de eliminar la trivia? Tambien eliminara todas las preguntas asociadas a esta',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'aceptar',
        handler: () => {
          this._pr.eliminar_trivia(this.nombre_trivia).subscribe(()=>{
             console.log(this._pr.error);
             console.log(this._pr.mensaje);
             if(this._pr.error==false){
               this.alertCtrl.create({
                 title:"trivia eliminada con exito",
                 subTitle:this._pr.mensaje,
                 buttons:["OK"]
               }).present();
               this._pr.ver_trivias();
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
