import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../../model/alimento';
import { ToastController } from 'ionic-angular'

@Component({
  selector: 'page-calculadora-carboidratos',
  templateUrl: 'calculadoraCarboidratos.html'
})
export class CalculadoraCarboidratosPage {

	url: string = "https://glicoradar.firebaseio.com/TabelaCarboidratos.json";
	tabelaCarboidratos: Array<{nome: string, cho: number, kcal: number, medidaCaseira: number, peso: number}>
	alimentos: any[] = [];

  constructor(public httpClient: HttpClient,public toastCtrl: ToastController,) {
  	this.alimentos = [];
  	this.obterTabelaDeCarboidratos();

  }

  obterTabelaDeCarboidratos() {
        this.httpClient.get(this.url)
            .subscribe(tabelaCarboidratos => {
                this.tabelaCarboidratos = Object.getOwnPropertyNames(tabelaCarboidratos)
                    .reduce((tabelaFinal, alimento) => tabelaFinal.concat(tabelaCarboidratos[alimento]), []);
            });
   }

   adicionarAlimento() {
   		var alimento = {};

   		this.alimentos.push(alimento);
   }

   private abrirToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

   calcularCarboidratos() {
   	var carb = 0;

   	for (let alimento of this.alimentos) {
   		if (alimento == null) {
   			continue;
   		} else {
   			for (let element of this.tabelaCarboidratos) {
   				if (element.nome === alimento.nome) {
   					carb += element.cho * (alimento.quantidade/element.medidaCaseira);
   				}
   			}
   		}
   	}

   	this.abrirToast("Você estará consumindo " + carb + " gramas de carboidratos");

   }
}
