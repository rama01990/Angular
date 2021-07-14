import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InterceptiorService } from './API-intercetor.service';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDashboardComponent
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
