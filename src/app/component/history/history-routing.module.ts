import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';


@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: HistoryComponent }
	])],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
