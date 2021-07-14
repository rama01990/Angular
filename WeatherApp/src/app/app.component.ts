import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccuRequestService } from './accu-request.service';
import { AppDataService } from './App-Data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  title = 'WeatherApp';
  City: any;
  State: any;
  Temparature: any;
  isCelcius:boolean;
  subScription = new Subscription;
  feels_like: number;
  wind: number;
  visibility: number;
  humidity: number;
  pressure: number;
  updatedTime: string;
  country: any;
  constructor(private accuService:AccuRequestService, private appDataService: AppDataService){}
  ngOnInit(){
    this.getCityWeatherReport('Hyderabad');
    this.subScription=this.appDataService.UnitChange.subscribe(data =>{
      data === 'C' ? this.isCelcius=true : this.isCelcius=false;
    })
  }

  CityChange(newCity:string){
    this.getCityWeatherReport(newCity);
  }

  getCityWeatherReport(cityName:string){
    this.accuService.GetTemprature(cityName).subscribe((res)=>{
      console.log(res)
        this.City=res.location.name;
        this.State=res.location.region;
        this.country=res.location.country;
        this.Temparature=res.current.temp_c;
        this.feels_like=res.current.condition.feelslike_c
        this.wind=res.current.condition.wind_kph
        this.visibility=res.current.condition.vis_km
        this.humidity=res.current.condition.humidity
        this.pressure=res.current.condition.pressure_in
        this.updatedTime=res.current.last_updated
    })
  }

  unitChange(unit:string){
    this.appDataService.UnitChange.next(unit);
  }

  ngOnDestroy(){
    this.subScription.unsubscribe();
  }
}
