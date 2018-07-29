import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {


    public url = 'https://glicoradar.firebaseio.com/glicemia-list.json';
    public glicemias: Array<{data: string, valor: string}>;
    public datas : any[] = [];
    public valores: any[] = [];

    public lineChartData:Array<any> = [
        {data: [70, 80, 85, 80, 130, 120, 115, 99], label: 'Glicose'},
      ];

    public lineChartLabels:Array<any> = ['2018-07-22', '2018-07-23',  '2018-07-24', '2018-07-25', ' 2018-07-26', '2018-07-27', '2018-07-28', '2018-07-29'];
    
    public lineChartOptions:any = {
        responsive: true
      };

    constructor(public httpClient: HttpClient) {

      this.obterGlicemias();
    }

    obterGlicemias() {
      this.httpClient.get(this.url)
          .subscribe(glicemias => {
              this.glicemias = Object.getOwnPropertyNames(glicemias)
                    .reduce((glicfinal, teste) => glicfinal.concat(glicemias[teste]), []);
              this.datas = Object.getOwnPropertyNames(glicemias)
                    .reduce((glicfinal, teste) => glicfinal.concat(glicemias[teste]['data']), []);
              this.valores = Object.getOwnPropertyNames(glicemias)
                    .reduce((glicfinal, teste) => glicfinal.concat(glicemias[teste]['valor']), []);
          });
      
    }

    getValores() {
      for (let glicemia of this.glicemias) {
          this.datas.push(glicemia['data']);
          this.valores.push(glicemia['valor']);
        }
    }

   
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
      


      public chartClicked(e:any):void {
  
        console.log(this.datas);
        console.log(this.valores);      
    //    this.lineChartLabels = this.datas;
     //   this.lineChartData = this.valores;
      }
      
      public chartHovered(e:any):void {
        console.log(e);
      }
}