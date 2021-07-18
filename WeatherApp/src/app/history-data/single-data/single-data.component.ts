import { Component, OnInit, Input } from '@angular/core';
import { DataWeatherHistory } from 'src/app/app.model';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css']
})
export class SingleDataComponent implements OnInit {
  @Input() data:DataWeatherHistory; 
  constructor() { }

  ngOnInit() {
    
  }

}
