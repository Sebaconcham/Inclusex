import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {AlertController} from "ionic-angular";
import {ContenidoService} from "../../providers/index.services";
import {ListarcontenidoePage} from "../index.paginas";


@Component({
  selector: 'page-e-contenidos-editar',
  templateUrl: 'e-contenidos-editar.html',
})
export class EContenidosEditarPage {
  myForm: FormGroup;
  contenido: any={};
   constructor(
     public navCtrl: NavController,
     public formBuilder: FormBuilder,
     private _co:ContenidoService,
     private alertCtrl: AlertController,
     public navParams: NavParams){
     this.myForm = this.createMyForm();
     this.contenido=this.navParams.get("contenido");
     console.log(this.contenido.id);
     }
saveData(){
  let data:any;
  this.myForm.patchValue({id:this.contenido.id});
  this.myForm.patchValue({rut_creador:"12"});
  console.log(this.myForm.value);
  this._co.editar_contenido(this.myForm.value)
          .subscribe(()=>{
             console.log(this._co.error);
             console.log(this._co.mensaje);
             if(this._co.error==true){
               this.alertCtrl.create({
                 title:"Error al editar contenido",
                 subTitle:this._co.mensaje,
                 buttons:["OK"]
               }).present();
             }
             else{
               this.alertCtrl.create({
                 title:this._co.mensaje,
                 subTitle:"deslice hacia abajo para ver los cambios ",
                 buttons:["OK"]
               }).present();
             this.navCtrl.pop().then(()=>this.navCtrl.pop());


             }
           });
}
     private createMyForm(){
       return this.formBuilder.group({
         id:[],
         titulo: ['', Validators.required],
         resumen:['',Validators.required],
         texto: ['', Validators.required],
         tipo_lesion: ['', Validators.required],
         nivel_lesion: ['', Validators.required],
         rut_creador:[],

       });
     }

}
