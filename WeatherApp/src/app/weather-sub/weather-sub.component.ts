import { Component, OnInit, Input } from '@angular/core';
import { DataWeather } from '../app.model';

@Component({
  selector: 'app-weather-sub',
  templateUrl: './weather-sub.component.html',
  styleUrls: ['./weather-sub.component.css']
})
export class WeatherSubComponent implements OnInit {
 // @Input() Value:number;
 @Input() WeatherSubData: DataWeather;
  constructor() { }

  ngOnInit() {
    console.log(this.WeatherSubData)

  }

}
