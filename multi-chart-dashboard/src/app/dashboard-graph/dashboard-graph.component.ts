import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import {ApiRequestService} from "../services/api-request-service";
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.css'],

})
export class DashboardGraphComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [30, 45, 90, 65, 27, 37, 60], label: 'Series B' },
  ];
  public lineChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', fill: false },
    { data: [30, 45, 90, 65, 27, 37, 60], label: 'Series B', fill: false },
  ];
  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7'];

  public areaChartLabels : Label[] = [];
  public areaLineChartData: ChartDataSets[] = [];

  public mobileLineChartData: ChartDataSets[] = [];
  public mobileChartLabel : Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation:true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType:ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private serviceReq: ApiRequestService) { }

  ngOnInit(): void {
    this.serviceReq.getAreaChartData().then((res)=>{
      this.areaLineChartData = this.mappingAreaChart(res);
    });

    this.serviceReq.getMobileChartData().then((result)=>{
      this.mobileLineChartData = this.mappingMobileChart(result);
    });
  }

  mappingMobileChart(mobileChartDataList:any){
    let iphoneChartObj = {
      label:'Iphone',
      data:[],
      fill:false
    };
    let ipadChartObj = {
      label:'Ipad',
      data:[],
      fill:false
    };
    let ipodChartObj = {
      label:'Ipod',
      data:[],
      fill:false
    };
    mobileChartDataList.forEach((item: { mobileName: string; cost: any; year: any })=>{
      if(item.mobileName === 'Iphone'){
        // @ts-ignore
        iphoneChartObj.data.push(item.cost);
        this.mobileChartLabel.push(item.year)

      }
      if(item.mobileName === 'Ipad') {
        // @ts-ignore
        ipadChartObj.data.push(item.cost);
      }
      if(item.mobileName === 'Ipod') {
        // @ts-ignore
        ipodChartObj.data.push(item.cost);
      }
    });

    return [iphoneChartObj, ipadChartObj, ipodChartObj ]
  }

  mappingAreaChart(chartDataList: any){
    let areaChartObj = {
      label:'',
      data:[]
    };
    let areaChartObj2 = {
      label:'',
      data:[]
    };
    chartDataList.forEach((item: {point:number; seriesName: string; cost: number; }) => {
      if(item.seriesName === 'Series A'){
        areaChartObj.label = 'Series A';
        // @ts-ignore
        areaChartObj.data.push(item.cost);
        // @ts-ignore
        this.areaChartLabels.push(item.point)
      }
      if(item.seriesName === 'Series B'){
        areaChartObj2.label = 'Series B';
        // @ts-ignore
        areaChartObj2.data.push(item.cost)
      }
    });
    return [areaChartObj,areaChartObj2]
  }

}
