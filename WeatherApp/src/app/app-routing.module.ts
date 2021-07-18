import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './App-resolver.service';
import { HistoryDataComponent } from './history-data/history-data.component';


const routes: Routes = [
  {path:'history',runGuardsAndResolvers: 'paramsOrQueryParamsChange', component: HistoryDataComponent,resolve:{'AppHorlyData':DataResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
