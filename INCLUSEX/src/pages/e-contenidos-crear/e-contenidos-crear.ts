import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { ContenidoService} from "../../providers/index.services";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'page-e-contenidos-crear',
  templateUrl: 'e-contenidos-crear.html',
})
export class EContenidosCrearPage {
  myForm: FormGroup;
   constructor(
     public navCtrl: NavController,
     public formBuilder: FormBuilder,
     private _co:ContenidoService,
     private alertCtrl: AlertController){
     this.myForm = this.createMyForm();
     }
  saveData(){
  let data:any;

  this.myForm.patchValue({rut_creador:"12"});
  console.log(this.myForm.value);
  this._co.crear_contenido(this.myForm.value)
          .subscribe(()=>{
             if(this._co.error==true){
               this.alertCtrl.create({
                 title:"Error al guardar contenido",
                 subTitle:this._co.mensaje,
                 buttons:["OK"]
               }).present();
             }
             else{
               this.alertCtrl.create({
                 title:"Contenido creado correctamente",
                 subTitle:this._co.mensaje,
                 buttons:["OK"]
               }).present();

               this.navCtrl.pop();
             }
           });
  }
     private createMyForm(){
       return this.formBuilder.group({
         titulo: ['', Validators.required],
         resumen:['',Validators.required],
         texto: ['', Validators.required],
         tipo_lesion: ['', Validators.required],
         nivel_lesion: ['', Validators.required],
         rut_creador:[],

       });
     }

   }
