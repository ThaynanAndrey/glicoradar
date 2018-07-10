import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { TabelaCarboidratoModalPage } from './modalTabelaCarboidratos/tabelaCarboidratosModal';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-tabela-carboidratos',
  templateUrl: 'tabelaCarboidratos.html'
})
export class TabelaCarboidratosPage {

    url: string = "https://glicoradar.firebaseio.com/TabelaCarboidratos.json";
    tabelaCarboidratos: Array<{nome: string, kcal: number, medidaCaseira: string, peso: number}>;

    constructor(public navCtrl: NavController,
        public modalCtrl: ModalController, public httpClient: HttpClient) {
        this.obterTabelaDeCarboidratos();
    }

    obterTabelaDeCarboidratos() {
        this.httpClient.get(this.url)
            .subscribe(tabelaCarboidratos => {
                this.tabelaCarboidratos = Object.getOwnPropertyNames(tabelaCarboidratos)
                    .reduce((tabelaFinal, alimento) => tabelaFinal.concat(tabelaCarboidratos[alimento]), []);
            });
    }

    abriModal(alimento) {
        let modal = this.modalCtrl.create(TabelaCarboidratoModalPage, { alimento });
        modal.present();
    }

    selecionarAlimento(alimento) {
        this.abriModal(alimento);
    }

    filtrarAlimentos() {

    }
}