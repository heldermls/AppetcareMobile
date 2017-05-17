import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTutorPage } from './cadastro-tutor';

@NgModule({
  declarations: [
    CadastroTutorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroTutorPage),
  ],
  exports: [
    CadastroTutorPage
  ]
})
export class CadastroTutorModule {}
