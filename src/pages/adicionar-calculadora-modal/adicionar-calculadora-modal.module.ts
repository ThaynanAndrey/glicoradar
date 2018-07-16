import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarCalculadoraModalPage } from './adicionar-calculadora-modal';

@NgModule({
  declarations: [
    AdicionarCalculadoraModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarCalculadoraModalPage),
  ],
})
export class AdicionarCalculadoraModalPageModule {}
