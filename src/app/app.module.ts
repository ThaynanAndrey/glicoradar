import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabelaCarboidratosPage,
    TabelaCarboidratoModalPage,
    CalculadoraCarboidratosPage,
    HistoricoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabelaCarboidratosPage,
    TabelaCarboidratoModalPage,
    CalculadoraCarboidratosPage,
    HistoricoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
