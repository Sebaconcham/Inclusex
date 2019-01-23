import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MensajeService} from "../../providers/index.services";
import { AlertController} from "ionic-angular";

@Component({
  selector: 'page-u-mensajes-crear',
  templateUrl: 'u-mensajes-crear.html',
})
export class UMensajesCrearPage {
    rut:any;
    myForm: FormGroup;
     constructor(
       public navCtrl: NavController,
       public navParams: NavParams,
       public formBuilder: FormBuilder,
       private _em:MensajeService,
       private alertCtrl: AlertController){
       this.myForm = this.createMyForm();
       this.rut=this.navParams.get("rut_e");
       console.log(this.rut+"soy el rut");
       }
     saveData(){
       this.myForm.patchValue({rut_e:this.rut});
       console.log(this.myForm.value);
       this._em.enviar_mensaje(this.myForm.value)
       .subscribe(()=>{
          console.log(this._em.error);
          console.log(this._em.mensaje);
          if(this._em.error==true){
            this.alertCtrl.create({
              title:"Error al guardar contenido",
              subTitle:this._co.mensaje,
              buttons:["OK"]
            }).present();
          }
          else{
            this.alertCtrl.create({
              title:"Contenido creado correctamente",
              subTitle:this._em.mensaje,
              buttons:["OK"]
            }).present();

            this.navCtrl.pop();
          }
        });
     }
    private createMyForm(){

      return this.formBuilder.group({
        rut_e:['',],
        asunto: ['', Validators.required],
        pregunta:['',Validators.required],

    })
  }
}
