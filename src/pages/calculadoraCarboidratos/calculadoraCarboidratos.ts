import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AdicionarCalculadoraModalPage } from '../adicionar-calculadora-modal/adicionar-calculadora-modal';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-calculadora-carboidratos',
  templateUrl: 'calculadoraCarboidratos.html'
})
export class CalculadoraCarboidratosPage {

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

   abrirModal(alimento) {
        let modal = this.modalCtrl.create(AdicionarCalculadoraModalPage, { alimento });
        modal.onDidDismiss(data => {
    		console.log(data);
		});
        modal.present();
    }


    filtrarAlimentos() {
    	console.log('teste');
    }
}
