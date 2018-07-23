import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../../model/alimento';

@Component({
  selector: 'page-calculadora-carboidratos',
  templateUrl: 'calculadoraCarboidratos.html'
})
export class CalculadoraCarboidratosPage {

	url: string = "https://glicoradar.firebaseio.com/TabelaCarboidratos.json";
	tabelaCarboidratos: Array<{nome: string, kcal: number, medidaCaseira: string, peso: number}>
	alimentos: any[] = [];

  constructor(public httpClient: HttpClient) {
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
   		var alimento = new Alimento();

   		this.alimentos.push(alimento);

   		console.log(this.alimentos)
   }
}
