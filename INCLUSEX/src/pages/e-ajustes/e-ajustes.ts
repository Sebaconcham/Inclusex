import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {RegistrarService} from "../../providers/index.services";
import {AlertController} from "ionic-angular";
import {IniciarsesionPage} from "../index.paginas";

@Component({
  selector: 'page-e-ajustes',
  templateUrl: 'e-ajustes.html',
})
export class EAjustesPage {


      myForm: FormGroup;

       constructor(
         public navCtrl: NavController,
         public formBuilder: FormBuilder,
         private _us:RegistrarService,
         private alertCtrl: AlertController){
         this.myForm = this.createMyForm();
         }
       saveData(){

         let data:any;
         if(this.myForm.value.passwordRetry.password!=this.myForm.value.passwordRetry.passwordConfirmation){
           this.alertCtrl.create({
             title:"Error en la contrseña",
             subTitle:"las contraseñas no coinciden",
             buttons:["OK"]
           }).present();
         }
         else{
           this.myForm.patchValue({contrasena:this.myForm.value.passwordRetry.password});
           this._us.actualizar_especialista(this.myForm.value)
                   .subscribe(()=>{
                      console.log(this._us.error);
                      console.log(this._us.mensaje);
                      if(this._us.error==true){
                        this.alertCtrl.create({
                          title:"Error al actualizarr",
                          subTitle:this._us.mensaje,
                          buttons:["OK"]
                        }).present();
                      }
                      else{
                        this.alertCtrl.create({
                          title:"Usuario actualizado con exito",
                          subTitle:this._us.mensaje,
                          buttons:["OK"]
                        }).present();
                        this.navCtrl.pop();
                      }
                    });
            }
       }
      private createMyForm(){
        return this.formBuilder.group({
          rut:['',Validators.required],
          nombre: ['',Validators.required],
          correo: ['', Validators.required],
          genero: ['', Validators.required],
          fecha_nac: ['', Validators.required],
          passwordRetry: this.formBuilder.group({
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required]
          }),
          contrasena:[    ],

        });
      }
    }
