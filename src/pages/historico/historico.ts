import { Component } from '@angular/core';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], label: 'Série A'},
        {data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86], label: 'Série B'},
        {data: [18, 48, 77, 9, 100, 27, 40, 18, 48, 77, 9, 100], label: 'Série C'}
      ];

    public lineChartLabels:Array<any> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', "Ago", "Set", "Out", "Nov", "Dez"];
    
    public lineChartOptions:any = {
        responsive: true
      };
    
    public lineChartColors:Array<any> = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // azul
          backgroundColor: 'rgba(0,0,255,0.2)',
          borderColor: 'rgba(0,0,255,1)',
          pointBackgroundColor: 'rgba(0,0,255,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(0,0,255,1)'
        },
        { // vermelho
          backgroundColor: 'rgba(255,0,0,0.2)',
          borderColor: 'rgba(255,0,0,1)',
          pointBackgroundColor: 'rgba(255,0,0,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,0,0,0.8)'
        }
      ];
      
    public lineChartLegend:boolean = true;
    
    public lineChartType:string = 'line'; 
      
    constructor() {
        
    }

    public randomize():void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
          _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
          for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
          }
        }
        this.lineChartData = _lineChartData;
      }
      
      public chartClicked(e:any):void {
        console.log(e);
      }
      
      public chartHovered(e:any):void {
        console.log(e);
      }
}