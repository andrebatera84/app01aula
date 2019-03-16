import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-correios',
  templateUrl: 'correios.html',
})
export class CorreiosPage {

  txtCidade: String;
  txtEstado: String;
  txtLogradouro: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreiosPage');
  }

  exibeInputs() {
    console.log(`Cidade: ${this.txtCidade}\n Estado: ${this.txtEstado}\n Logradouro: ${this.txtLogradouro}`);
  }

}
