import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FIREBASE_CONFIG } from './firebase.credentials';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabelaCarboidratosPage } from '../pages/tabelaCarboidratos/tabelaCarboidratos';
import { TabelaCarboidratoModalPage } from '../pages/tabelaCarboidratos/modalTabelaCarboidratos/tabelaCarboidratosModal';
import { CalculadoraCarboidratosPage } from '../pages/calculadoraCarboidratos/calculadoraCarboidratos';
import { HistoricoPage } from '../pages/historico/historico';
import { AnotacoesPage } from '../pages/anotacoes/anotacoes'
import { TabsPage } from '../pages/tabs/tabs';
import { InserirGlicemiasPage } from '../pages/inserir-glicemias/inserir-glicemias';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabelaCarboidratosPage,
    TabelaCarboidratoModalPage,
    CalculadoraCarboidratosPage,
    HistoricoPage,
    AnotacoesPage,
    TabsPage,
    InserirGlicemiasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ChartsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabelaCarboidratosPage,
    TabelaCarboidratoModalPage,
    CalculadoraCarboidratosPage,
    HistoricoPage,
    TabsPage,
    AnotacoesPage,
    InserirGlicemiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
