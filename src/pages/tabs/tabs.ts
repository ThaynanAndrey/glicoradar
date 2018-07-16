import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TabelaCarboidratosPage } from '../tabelaCarboidratos/tabelaCarboidratos';
import { CalculadoraCarboidratosPage } from '../calculadoraCarboidratos/calculadoraCarboidratos';
import { HistoricoPage } from '../historico/historico';
import { AnotacoesPage } from '../anotacoes/anotacoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TabelaCarboidratosPage;
  tab3Root = CalculadoraCarboidratosPage;
  tab4Root = HistoricoPage;
  tab5Root = AnotacoesPage;

  constructor() {

  }
}
