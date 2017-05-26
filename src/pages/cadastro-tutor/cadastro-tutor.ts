import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-cadastro-tutor',
  templateUrl: 'cadastro-tutor.html',
})
export class CadastroTutorPage {

  cadastroTutorForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      
      this.cadastroTutorForm = this.formBuilder.group({
        nome:['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.minLength(3)]],
        telefone: ['', [Validators.required, Validators.minLength(3)]],
        senha: ['', [Validators.required, Validators.minLength(3)]],
        confirmarsenha: ['', [Validators.required, Validators.minLength(3)]]
      });
  }


  cadastrar() : void{ 
    console.log(this.cadastroTutorForm.value);
  }

}
