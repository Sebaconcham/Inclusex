import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MensajeService} from "../../providers/index.services";
import { AlertController} from "ionic-angular";

@Component({
  selector: 'page-e-mensajes-responder',
  templateUrl: 'e-mensajes-responder.html',
})
export class EMensajesResponderPage {
  mensaje:any;
  rut:any;
  myForm: FormGroup;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public formBuilder: FormBuilder,
                private _em:MensajeService,
                private alertCtrl: AlertController) {
      this.myForm = this.createMyForm();
      this.mensaje=this.navParams.get("mensaje");
      this.rut=this.navParams.get("rut");

      console.log(this.mensaje+"sdjpasodoasd");
    }
     saveData(){
       this.myForm.patchValue({id:this.mensaje.id});
       this.myForm.patchValue({rut_r:this.rut});
       console.log(this.myForm.value);
       this._em.responder_mensaje(this.myForm.value)
       .subscribe(()=>{
          console.log(this._em.error);
          console.log(this._em.mensaje);
          if(this._em.error==true){
            this.alertCtrl.create({
              title:"Error al  responder mensaje",
              subTitle:this._co.mensaje,
              buttons:["OK"]
            }).present();
          }
          else{
            this.alertCtrl.create({
              title:"mensaje respondido creado correctamente",
              subTitle:this._em.mensaje,
              buttons:["OK"]
            }).present();
            console.log("rut especialista"+this.rut);
            this._em.cargar_todos("false");
            this.navCtrl.pop();

          }
        });
     }
    private createMyForm(){

      return this.formBuilder.group({
        id:['',],
        rut_r:['',],
        respuesta: ['', Validators.required],


    })
    }

  }
