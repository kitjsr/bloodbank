import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DonationComponent } from './donation.component';


@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: DonationComponent }
	])],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
