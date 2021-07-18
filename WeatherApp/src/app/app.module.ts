import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InterceptiorService } from './API-intercetor.service';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { WeatherSubComponent } from './weather-sub/weather-sub.component';
import { HistoryDataComponent } from './history-data/history-data.component';
import { SingleDataComponent } from './history-data/single-data/single-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDashboardComponent,
    WeatherSubComponent,
    HistoryDataComponent,
    SingleDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptiorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
