import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule
  ]
})
export class RegistrationModule { }
