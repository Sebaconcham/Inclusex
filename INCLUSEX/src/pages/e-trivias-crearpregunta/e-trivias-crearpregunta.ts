import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController} from "ionic-angular";
import { TriviasService} from "../../providers/index.services";
@Component({
  selector: 'page-e-trivias-crearpregunta',
  templateUrl: 'e-trivias-crearpregunta.html',
})
export class ETriviasCrearpreguntaPage {

  nombretrivia:any;
  myForm: FormGroup;
  nombre_pagina_anterior:any;
   constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     private alertCtrl: AlertController,
     private _pt: TriviasService){
     this.nombretrivia=this.navParams.get("nombretrivia");
     this.nombre_pagina_anterior=this.navCtrl.last().name;
     if(this.nombre_pagina_anterior=="ETriviasDetallePage"){
     this.myForm = this.createMyForm1();
     }else{
     this.myForm = this.createMyForm2();
     }
     }
   saveData(){
     if(this.nombre_pagina_anterior=="ETriviasDetallePage"){
       console.log("if 1");
        this.myForm.patchValue({nombre_trivia:this.nombretrivia});
        this._pt.guardar_pregunta(this.myForm.value).subscribe(()=>{
           console.log(this._pt.error);
           console.log(this._pt.mensaje);
           this._pt.buscar_preguntas(this.nombretrivia);
           this.navCtrl.pop();
          });
     }else{
       console.log("if 2");
       console.log(this.myForm.value);
       this._pt.agregar_pregunta(this.myForm.value);
       console.log(this._pt);
       this.navCtrl.pop();
     }

   }
   private createMyForm1(){

     return this.formBuilder.group({
       nombre_trivia:['',],
       pregunta:['', Validators.required],
       alternativa_c: ['', Validators.required],
       alternativa_i1:['',Validators.required],
       alternativa_i2:['',Validators.required],
       alternativa_i3:['',Validators.required],

   })
   }
  private createMyForm2(){

    return this.formBuilder.group({
      pregunta:['', Validators.required],
      alternativa_c: ['', Validators.required],
      alternativa_i1:['',Validators.required],
      alternativa_i2:['',Validators.required],
      alternativa_i3:['',Validators.required],

  })
  }

}
