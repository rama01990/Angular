import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppDataService } from '../App-Data.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {
  isCelcius:boolean;
  subScription = new Subscription;
  constructor( private appDataService: AppDataService){}
  ngOnInit(){
    this.subScription=this.appDataService.UnitChange.subscribe(data =>{
      data === 'C' ? this.isCelcius=true : this.isCelcius=false;
    })
  }

}
