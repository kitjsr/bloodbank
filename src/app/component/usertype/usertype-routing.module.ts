import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsertypeComponent } from './usertype.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: UsertypeComponent }
	])],
  exports: [RouterModule]
})
export class UsertypeRoutingModule { }





