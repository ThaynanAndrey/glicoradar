import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'tabelaCarboidratosModal.html'
  })
  export class TabelaCarboidratoModalPage {
    alimento;
  
    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
    ) {
      this.alimento = this.params.get('alimento');
    }
  
    fecharModal() {
      this.viewCtrl.dismiss();
    }
  }