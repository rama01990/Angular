import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataWeatherHistory } from '../app.model';

@Component({
  selector: 'app-history-data',
  templateUrl: './history-data.component.html',
  styleUrls: ['./history-data.component.css']
})
export class HistoryDataComponent implements OnInit {
  HourlyData:DataWeatherHistory[];
  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe( (data1:DataWeatherHistory[]) => {
    this.HourlyData=data1['AppHorlyData']
    console.log("City Changed");  
    
    })
  }

}
