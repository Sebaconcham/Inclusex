import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {RegistrarService} from "../../providers/index.services";
import {AlertController} from "ionic-angular";
import {IniciarsesionPage} from "../index.paginas";
@Component({

  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

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
       this._us.registrar_usuario(this.myForm.value)
               .subscribe(()=>{
                  console.log(this._us.error);
                  console.log(this._us.mensaje);
                  if(this._us.error==true){
                    this.alertCtrl.create({
                      title:"Error al registrar",
                      subTitle:this._us.mensaje,
                      buttons:["OK"]
                    }).present();
                  }
                  else{
                    this.alertCtrl.create({
                      title:"Usuario registrado con exito",
                      subTitle:this._us.mensaje,
                      buttons:["OK"]
                    }).present();
                    this.navCtrl.setRoot(IniciarsesionPage);
                  }
                });
        }
   }
  private createMyForm(){
    return this.formBuilder.group({
      tipo: ['', Validators.required],
      rut:['',Validators.required],
      nombre: [],
      correo: ['', Validators.required],
      genero: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      tipo_lesion: ['', Validators.required],
      nivel_lesion: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      contrasena:[    ],

    });
  }
}
