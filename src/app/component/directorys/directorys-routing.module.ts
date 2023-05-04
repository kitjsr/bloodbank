import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorysComponent } from './directorys.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: DirectorysComponent }
	])],
  exports: [RouterModule]
})
export class DirectorysRoutingModule { }
