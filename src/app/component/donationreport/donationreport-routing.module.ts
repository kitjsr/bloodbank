import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DonationreportsComponent } from './donationreport.component';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: DonationreportsComponent }
	])],
  exports: [RouterModule]
})
export class DonationreportRoutingModule { }
