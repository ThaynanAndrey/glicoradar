import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ModalController, Platform,  ViewController } from 'ionic-angular';


/**
 * Generated class for the AdicionarCalculadoraModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-calculadora-modal',
  templateUrl: 'adicionar-calculadora-modal.html',
})
export class AdicionarCalculadoraModalPage {

    alimento: any;

    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
    ) {
      this.alimento = this.params.get('alimento');
    }
  
    fecharModal(alimento) {
      alimento.quantidade = +alimento.quantidade;
      this.viewCtrl.dismiss(alimento);
    }
  
}
