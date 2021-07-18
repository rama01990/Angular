import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccuRequestService } from './accu-request.service';
import { AppDataService } from './App-Data.service';
import { DataWeather } from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  title = 'WeatherApp';
  City: any='Hyderabad';
  State: any='Telengana';
  Temparature: any='26';
  isCelcius:boolean;
  subScription = new Subscription;
  feels_like: number;
  wind: number;
  DashboardSubData:DataWeather;
  visibility: number;
  humidity: number;
  pressure: number;
  updatedTime: string;
  country: any;
  MessageText:string;

  constructor(private accuService:AccuRequestService, private appDataService: AppDataService, private route:Router){}
  ngOnInit(){
    this.getCityWeatherReport('Hyderabad');
    
    
    this.subScription=this.appDataService.UnitChange.subscribe(data =>{
      data === 'C' ? this.isCelcius=true : this.isCelcius=false;
    })
    
  }

  CityChange(newCity:string){
    console.log('city changed to: '+newCity);
    
    this.getCityWeatherReport(newCity);
  }

  getCityWeatherReport(cityName:string){
    this.accuService.GetTemprature(cityName).subscribe((res)=>{
      console.log(res)
        this.City=res.location.name;
        this.State=res.location.region;
        this.country=res.location.country;
        this.Temparature=res.current.temp_c;
        this.feels_like=res.current.feelslike_c
        this.wind=res.current.wind_kph
        this.visibility=res.current.vis_km
        this.humidity=res.current.humidity
        this.pressure=res.current.pressure_in
        this.updatedTime=res.current.last_updated
        this.MessageText=res.current.condition.text
        this.DashboardSubData=new DataWeather(this.feels_like,this.wind,this.visibility,this.humidity,this.pressure);
      })
      
  }

  unitChange(unit:string){
    this.appDataService.UnitChange.next(unit);
  }

  hourlyRout(){
    this.route.navigate(['history']);

  }

  ngOnDestroy(){
    this.subScription.unsubscribe();
  }
}
