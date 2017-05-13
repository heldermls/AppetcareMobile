import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PicturePage } from '../picture/picture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
openPage(){
  this.navCtrl.push(PicturePage);
}

}
