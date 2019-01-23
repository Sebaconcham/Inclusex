import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-u-trivias-resultado',
  templateUrl: 'u-trivias-resultado.html',
})
export class UTriviasResultadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UTriviasResultadoPage');
  }

}
