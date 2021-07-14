import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccuRequestService {
  
  constructor(private http: HttpClient) { }   
    
  GetTemprature(city:string){
    return this.http.get<any>('http://api.weatherapi.com/v1/current.json?',{
      params: new HttpParams().set('q',city).append('aqi','no')
    });
  }
}
