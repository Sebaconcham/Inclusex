import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController} from "ionic-angular";
import { TriviasService} from "../../providers/index.services";
import { ETriviasCrearPage} from "../index.paginas";
import { ETriviasDetallePage} from "../index.paginas";

@Component({
  selector: 'page-e-trivias',
  templateUrl: 'e-trivias.html',
})
export class ETriviasPage {
  existe:boolean;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _tr: TriviasService,
              private alertCtrl: AlertController) {
              this._tr.ver_trivias();
              console.log("osdkasd"+this._tr);
  }
  ver_trivia(nombre_trivia:any){
      console.log(nombre_trivia);
      this.navCtrl.push(ETriviasDetallePage,{nombretrivia:nombre_trivia});
  }
  crear_trivia(){
    this.existe=false;
    let alert = this.alertCtrl.create({
      title: 'Nombre trivia',
      inputs: [
        {
          name: 'nombretrivia',
          placeholder: 'Ingrese un nombre para la nueva trivia'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');}
        },
        {
          text: 'Crear',
          handler: data => {
            console.log(data);
            for(let item of this._tr.trivias) {
              console.log(item.nombre+" es iugal a "+data.nombretrivia);
              if(item.nombre==data.nombretrivia){
                this.existe=true;

              }
              console.log(this.existe);
            }
            if (this.existe==true) {
              this.alertCtrl.create({
                title:"ya existe una trivia con este nombre",
                subTitle:"intentelo con otro nombre",
                buttons:["OK"]
              }).present();
            }else{
              this.navCtrl.push(ETriviasCrearPage,{nombretrivia:data.nombretrivia});

            }
          }
        }
      ]
    });
    alert.present();
  }

  }
