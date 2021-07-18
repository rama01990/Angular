import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AccuRequestService } from "./accu-request.service";
import { DataWeatherHistory } from "./app.model";

@Injectable({providedIn:'root'})
export class DataResolver implements Resolve<DataWeatherHistory[]>
{
    constructor(private accuService: AccuRequestService){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<DataWeatherHistory[]> |
    Promise<DataWeatherHistory[]> | DataWeatherHistory[]
    {
      let city:string=route.queryParams['city'];
      
      return this.accuService.GetHistoricalData(city)
    }
}