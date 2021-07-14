import { Component,  OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AppDataService } from '../App-Data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appDataService: AppDataService) { }

  @Input() State:string;
  @Input() Temparature:number;
  @Input() City:string;
  isCelcis: boolean = true;
  ngOnInit() {
  }

  CelciusChange(unit:string){
    if( unit === 'C' ){
      this.isCelcis = true
    } 
    else 
      { 
        this.isCelcis = false;
      }
    this.appDataService.UnitChanged(unit);
  }

}
