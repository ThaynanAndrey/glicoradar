import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabelaCarboidratosPage } from '../tabelaCarboidratos/tabelaCarboidratos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  verTabela() {
    console.log("Chegou aqui para ver a tabela!");
    this.navCtrl.push(TabelaCarboidratosPage, {});
  }

  verHistorico() {
    console.log("Chegou aqui para ver o histórico!");
  }
}
