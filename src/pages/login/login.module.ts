import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Registrar } from "../registrar/registrar";
import { LoginPage } from './login/login';

@NgModule({
  declarations: [
    LoginPage,
    Registrar
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
   LoginPage,
    Registrar
  ]
})
export class LoginModule {}
