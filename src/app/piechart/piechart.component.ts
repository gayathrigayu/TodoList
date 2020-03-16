import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit, OnChanges {
  @Input() chartData : any;
  public pieChartLabels:string[] = ['Completed Tasks', 'Total Tasks'];
  public pieChartData:number[];
  public pieChartType:string = 'pie';
  public showChart : boolean = false;
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#cccccc', '#5285EC']
 }];
  constructor() { }

  ngOnInit() {
    this.refreshChart();
  }

  ngOnChanges(changes : SimpleChanges) {
    if(changes.chartData.currentValue !== 'undefined') {
      this.showChart = false;
      this.refreshChart();
    }
  }

  refreshChart() {
    if(this.chartData) {
      this.pieChartData = this.chartData;
      this.showChart = true;
    }    
  }

  // events
  public chartClicked(e:any):void {

  }

  public chartHovered(e:any):void {

  }

}
