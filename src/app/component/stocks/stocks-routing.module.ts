import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks.component';


@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: StocksComponent }
	])],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
