import { Component,ViewChild  } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import {  NavController, NavParams,Slides } from 'ionic-angular';
import { TriviasService} from "../../providers/index.services";

@Component({
  selector: 'page-u-trivias-jugar',
  templateUrl: 'u-trivias-jugar.html',
})
export class UTriviasJugarPage {
  @ViewChild(Slides) slides: Slides;
  progreso:number;
  nombre_trivia:any;
  respuestascorrectas:number;
  respuestastotales:number;
  respuestas:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _pr: TriviasService) {
      this.respuestascorrectas=0;
      this.respuestastotales=0;
      this.respuestas=[];
      this.nombre_trivia=this.navParams.get("nombre_trivia");
      this._pr.buscar_preguntas(this.nombre_trivia);
      console.log(this._pr.t_preguntas);
      console.log(this._pr.pr);

  }
  ionViewDidLoad() {
     this.slides.lockSwipes(true);
    }

  nextSlide(respuesta:any){
      this.respuestastotales=this.respuestastotales+1

      if(respuesta==this._pr.t_preguntas[this.respuestastotales-1].alternativa_c){
        this.respuestascorrectas=this.respuestascorrectas+1;
        this.respuestas.push("correcta")
      }else{
        this.respuestas.push("incorrecta")
        console.log("respeusta incorrecta")
      }
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
      console.log(this.respuestascorrectas);

    }
  nextSlide1(respuesta:any){
    this.progreso=(this.respuestascorrectas*100)/this.respuestastotales;
    console.log(this._pr.trivias);
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  atras(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
  ver_texto(){
    this._pr.buscar_trivia(this.nombre_trivia);
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  terminar(){
    this.navCtrl.pop();
  }
}
