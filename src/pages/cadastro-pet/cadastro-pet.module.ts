import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPetPage } from './cadastro-pet';

@NgModule({
  declarations: [
    CadastroPetPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPetPage),
  ],
  exports: [
    CadastroPetPage
  ]
})
export class CadastroPetPageModule {}
