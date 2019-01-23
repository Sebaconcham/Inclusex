import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {RegistrarService} from "../../providers/index.services";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-u-ajustes',
  templateUrl: 'u-ajustes.html',
})
export class UAjustesPage {
    gender: string;
    tipo_lesion:string;
    nivel_lesion:strin;
    myForm: FormGroup;
    usuario:any[]=[];
    id_usuario:any;
     constructor(
       public navCtrl: NavController,
       public formBuilder: FormBuilder,
       private _us:RegistrarService,
       private navParams:NavParams,
       private alertCtrl: AlertController){
       this.myForm = this.createMyForm();
       this.usuario=this.navParams.get("user");
       console.log(this.usuario);
       this.gender=this.usuario.genero;
       this.tipo_lesion=this.usuario.tipo_lesion;
       this.nivel_lesion=this.usuario.nivel_lesion;

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
           this._us.actualizar_usuario(this.myForm.value)
                   .subscribe(()=>{
                      console.log(this._us.error);
                      console.log(this._us.mensaje);
                      if(this._us.error==true){
                        this.alertCtrl.create({
                          title:"Error al actualizar",
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
