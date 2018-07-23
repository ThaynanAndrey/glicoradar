import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InserirGlicemiasPage } from '../inserir-glicemias/inserir-glicemias'


@Component({
    templateUrl: 'anotacoes.html'
})
export class AnotacoesPage {

	constructor(public navCtrl: NavController) {}

	inserirGlicemias() {
		this.navCtrl.push(InserirGlicemiasPage);
	}

 }
