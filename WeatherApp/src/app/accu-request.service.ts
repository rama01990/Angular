import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ArrayData, DataWeatherHistory } from './app.model';


@Injectable({
  providedIn: 'root'
})
export class AccuRequestService {
  groupData:DataWeatherHistory[];
  
  constructor(private http: HttpClient) { }   
    
  GetTemprature(city:string){
    return this.http.get<any>('http://api.weatherapi.com/v1/current.json?',{
      params: new HttpParams().set('q',city).append('aqi','no')
    });
  }

  GetHistoricalData(City:string):Observable<DataWeatherHistory[]>|Promise<DataWeatherHistory[]>|DataWeatherHistory[]{
    console.log("City adae"+City);
    
    return this.http.get<any>('http://api.weatherapi.com/v1/forecast.json?',{
      params: new HttpParams().set('q',City).append('aqi','no').append('days','10').append('alerts','no')
    }).pipe(map(res =>{
      this.groupData=[]
      
      for(let day1 of res.forecast.forecastday){
        let max_temp=day1.day.maxtemp_c
        let min_temp=day1.day.mintemp_c
        let humid=day1.day.avghumidity
        let hourtime:ArrayData[]=[];
        for(let hour of day1.hour){
          hourtime.push({time:hour.time , temp:hour.temp_c,humidity:hour.humidity});
        }        
        this.groupData.push(new DataWeatherHistory(max_temp,min_temp,humid,hourtime));           
      }
      
      return this.groupData;
    }
    ))
  }
}
