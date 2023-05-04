import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonarsComponent } from './donars.component';


@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: DonarsComponent }
	])] ,
  exports: [RouterModule]
})
export class DonarsRoutingModule { }
