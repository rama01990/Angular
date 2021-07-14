import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class AppDataService implements OnInit{

    ngOnInit(){
        
    }
    //AppData:Data;
    UnitChange = new BehaviorSubject<string>('C');
   /* SetData(City: string,temprature:number,state: string){
        this.AppData.city=City;
        this.AppData.temprature=temprature;
        this.AppData.state=state;
    }*/
    public UnitChanged(unit:string){
    this.UnitChange.next(unit);
    console.log(unit);
    }
}