import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MarketComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
