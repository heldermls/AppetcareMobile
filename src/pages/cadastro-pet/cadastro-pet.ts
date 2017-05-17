import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the CadastroPetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro-pet',
  templateUrl: 'cadastro-pet.html',
})
export class CadastroPetPage {

  cadastroPetForm: FormGroup;

  constructor(public formBuilder: FormBuilder
    , public navCtrl: NavController
    , public navParams: NavParams) {

    this.cadastroPetForm = this.formBuilder.group({
        nome:['', [Validators.required, Validators.minLength(3)]],
        dtnascimento: ['', [Validators.required, Validators.minLength(3)]],
        sexo:['', [Validators.required]],
        especie: ['', [Validators.required, Validators.minLength(3)]],
        raca: ['', [Validators.required, Validators.minLength(3)]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPetPage');
  }

  cadastrar() : void{ 
    console.log(this.cadastroPetForm.value);
  }

}
