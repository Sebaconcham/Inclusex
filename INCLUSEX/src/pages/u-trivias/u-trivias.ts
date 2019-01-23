import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController} from "ionic-angular";
import { TriviasService} from "../../providers/index.services";
import { ETriviasCrearPage} from "../index.paginas";
import { UTriviasJugarPage} from "../index.paginas";
@Component({
  selector: 'page-u-trivias',
  templateUrl: 'u-trivias.html'
})
export class UTriviasPage {
  existe:boolean;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _tr: TriviasService,
              private alertCtrl: AlertController) {
              this._tr.ver_trivias();
              console.log("osdkasd"+this._tr);
  }
  jugar_trivia(nombre_trivia,numero_preguntas){
    let alert = this.alertCtrl.create({
        title: 'Esta a punto de jugar la trivia '+nombre_trivia,
        subTitle: 'tiene '+numero_preguntas+' preguntas',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Comenzar',
            handler: () => {
              
              console.log('Buy clicked');
              this.navCtrl.push(UTriviasJugarPage,{nombre_trivia:nombre_trivia});
            }
          }
        ]
      });
      alert.present();
  }
}
