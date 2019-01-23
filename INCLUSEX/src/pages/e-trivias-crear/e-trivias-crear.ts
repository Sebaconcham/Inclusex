import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController} from "ionic-angular";
import { TriviasService} from "../../providers/index.services";
import { ContenidoService} from "../../providers/index.services";
import {ETriviasCrearpreguntaPage} from "../index.paginas";

@Component({
  selector: 'page-e-trivias-crear',
  templateUrl: 'e-trivias-crear.html',
})
export class ETriviasCrearPage {
  myForm: FormGroup;
  t_p:any[]=[];
  nombretrivia:any;
  trivia:any[]=[];
  text_com:any;
   constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     private alertCtrl: AlertController,
     private _tr : TriviasService,
     private _cn:ContenidoService){
     this.nombretrivia=this.navParams.get("nombretrivia");
     this.trivia.push(this.nombretrivia),
     this.text_com="oasdosad";
     this.trivia.push(this.text_com);
     this.t_p.push(this.trivia);
     this._tr.vacias_preguntas();
     this._cn.ver_contenidos();
     }
  crear_pregunta(){
    this.navCtrl.push(ETriviasCrearpreguntaPage);
  }
  guardar_trivia(){
    console.log(this._tr.preguntas.length);
    if(this._tr.preguntas.length==0){
      this.alertCtrl.create({
        title:"La trivia no tiene pregutnas",
        subTitle:"crear al menos 1 pregunta para guardar la trivia",
        buttons:["OK"]
      }).present();
    }else{
    this.t_p.push(this._tr.preguntas);
    this._tr.guardar_trivia(this.t_p)
              .subscribe(()=>{
                 if(this._tr.error==true){
                   this.alertCtrl.create({
                     title:"Error al crar la id_trivia",
                     subTitle:this._tr.mensaje,
                     buttons:["OK"]
                   }).present();
                 }
                 else{
                   this.alertCtrl.create({
                     title:"Trivia creada correctamente",
                     subTitle:this._tr.mensaje,
                     buttons:["OK"]
                   }).present();
                   this._tr.vacias_preguntas();
                   this.navCtrl.pop();
                 }
               });
   }
 }
}
