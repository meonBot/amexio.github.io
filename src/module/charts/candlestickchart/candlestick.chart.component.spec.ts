import {  CandlestickChartComponent} from './candlestick.chart.component';
//import { AmexioFormIconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';
import { IconLoaderService } from '../../../index'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonDataService } from '../../services/data/common.data.service';
import { ChartLoaderService } from './../chart.loader.service';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
declare var google: any;
describe('CANDLESTICK CHART', () => {
    //let ChartTitleComponent=new ChartTitleComponent()
    // let ChartTitleComponent = [{'name':'chart','title':'','position':'','color':'','fontname':'','fontsize':'','bold':false,'italic':''}];
    let candlestickchartcomp:  CandlestickChartComponent;
    let charttitlecomp: ChartTitleComponent;
    let chartlegendcomp: ChartLegendComponent;
    let chartareacomp: ChartAreaComponent;
    let chartAreaArray:ChartAreaComponent[];
    let chartLegendArray: ChartLegendComponent[];
    let chartTitleComponent:  ChartTitleComponent[];
    let linefixture: ComponentFixture< CandlestickChartComponent>;
    let charttitlefixture: ComponentFixture<ChartTitleComponent>;
    let chartlegendfixture: ComponentFixture<ChartLegendComponent>;
    let chartareafixture: ComponentFixture<ChartAreaComponent>;

    let chartAreaArray2: ChartAreaComponent [];
    let chartLegendArray2: ChartLegendComponent []; 

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ CandlestickChartComponent, ChartTitleComponent, ChartLegendComponent, ChartAreaComponent],
            providers: [ChartLoaderService]
        }).compileComponents();
        linefixture = TestBed.createComponent( CandlestickChartComponent);
        charttitlefixture = TestBed.createComponent(ChartTitleComponent);
        chartlegendfixture = TestBed.createComponent(ChartLegendComponent);
        chartareafixture = TestBed.createComponent(ChartAreaComponent);

        candlestickchartcomp = linefixture.componentInstance;
        charttitlecomp = charttitlefixture.componentInstance;
        chartlegendcomp = chartlegendfixture.componentInstance;
        chartareacomp = chartareafixture.componentInstance;

        candlestickchartcomp.chartTitleComponent = charttitlecomp;
       // candlestickchartcomp.chartLengendComponent=chartlegendcomp;
       candlestickchartcomp.chartAreaComponent=chartareacomp;

        chartAreaArray2 = [];
        chartAreaArray2.push(chartareacomp);

        chartLegendArray2 = [];
        chartLegendArray2.push(chartlegendcomp);

    });
    it('show chart', () => {
        candlestickchartcomp.showChart = false;
        charttitlecomp.title = '';
        expect(false).toBe(candlestickchartcomp.showChart);
        let newdata = [{ 'name': 'linechart' }];
        candlestickchartcomp.data = newdata;
    });
    it('dont show chart', () => {
        let newdata;
        candlestickchartcomp.data = newdata;
        expect(false).toBe( candlestickchartcomp.showChart);
    });
    it('chartTitleTextStyle() properties', () => {
        charttitlecomp.color = '';
        charttitlecomp.fontname = '';
        charttitlecomp.fontsize = 10;
        charttitlecomp.bold = false;
        charttitlecomp.position = '';
        charttitlecomp.title = '';
        charttitlecomp.italic = false;
    });
    it('chartLegendStyle() properties', () => {
        chartlegendcomp.position = '';
        chartlegendcomp.alignment = '';
        chartlegendcomp.color = '';
        chartlegendcomp.fontname = '';
        chartlegendcomp.fontsize = '';
        chartlegendcomp.bold = false;
        chartlegendcomp.maxlines=null;
    });
    it('chartBackgroundStyle() properties', () => {
        chartareacomp.chartbackgroundcolor = '';
        chartareacomp.chartheight = 10;
        chartareacomp.chartwidth = 10;
        chartareacomp.leftposition = 10;
        chartareacomp.topposition = null;

    });
    it('drawchart()', () => {
        candlestickchartcomp.drawChart();
        candlestickchartcomp.chartTitleComponent.title = null;

    });
    it('chartTitleTextStyle()', () => {
        candlestickchartcomp.chartTitleComponent;
        candlestickchartcomp.chartTitleComponent.color = 'red';
        candlestickchartcomp.chartTitleComponent.fontname='times new roman';
        candlestickchartcomp.chartTitleComponent.fontsize=5;
        candlestickchartcomp.chartTitleComponent.bold=true;
        candlestickchartcomp.chartTitleComponent.italic=true;
        const charttextstyle= candlestickchartcomp.chartTileTextStyle();
       // console.log(JSON.stringify(charttextstyle));
    });
    // it('chartLegendStyle()',()=>{
    //     candlestickchartcomp.chartLengendComponent.position='left';
    //     donutchartcomp.chartLengendComponent.maxlines=5;
    //     donutchartcomp.chartLengendComponent.color='black';
    //     donutchartcomp.chartLengendComponent.fontsize='12';
    //     donutchartcomp.chartLengendComponent.alignment='center';
    //     donutchartcomp.chartLengendComponent.fontname='times';
    //     donutchartcomp.chartLengendComponent.bold=true;
    //     const chartlegendstyle= donutchartcomp.chartLegendStyle();
    //     // const json1 = {"position":null,"maxLines":5,"textStyle":{"color":"black","fontsize":"12","fontName":"times","bold":null,"alignment":"center"}}
    //     //console.log(JSON.stringify(chartlegendstyle));
    //     // expect(chartlegendstyle).toEqual(json1);

    // })
    it('chartBackgroundStyle()',()=>{
        candlestickchartcomp.chartAreaComponent.chartbackgroundcolor='red';
        candlestickchartcomp.chartAreaComponent.chartheight=50;
        candlestickchartcomp.chartAreaComponent.chartwidth=100;
        candlestickchartcomp.chartAreaComponent.leftposition=null;
        //const chartbgstyle =  candlestickchartcomp.chartBackgroundColor();
        //const json1 = {"backgroundcolor":null,"left":null,"top":null,"height":50,"width":100}
        //console.log(JSON.stringify(chartbgstyle));
    })
    it('ngAfterContentInit()',()=>{
        
        //linechartcomp.ngAfterContentInit();
        //console.log(" ********************* "+chartAreaArray2.toArray());
       // linechartcomp.ngAfterContentInit();
       // expect(linechartcomp.chartLegendArray).toEqual(linechartcomp.chartLegendComp.length[1]);
       //expect(linechartcomp.chartLengendComponent ).toEqual(linechartcomp.chartLegendArray.pop());
    
    
    
    });

    it('get data method', () => {
        candlestickchartcomp.data;
        expect(candlestickchartcomp.data).toBe(candlestickchartcomp._data);
    });

    it('Draw Chart Test', () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
            candlestickchartcomp.showChart = true;
            let newdata = [{ name: 'linechart' }];
            candlestickchartcomp.data = newdata;
            candlestickchartcomp.drawChart();
            expect(false).toBe(candlestickchartcomp.hasLoaded);
        }
    });
}); 





