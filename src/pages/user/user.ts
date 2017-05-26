import { Component } from '@angular/core';
import { NativeStorage  } from '@ionic-native/native-storage';
import { NavController } from 'ionic-angular';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginPage } from '../login/login';
import { Credencial } from '../../credencial';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {
  public nativeStorage : NativeStorage;
  public facebook : Facebook;
  user: any;
  userReady: boolean = false;

  constructor(public navCtrl: NavController) {}

  ionViewCanEnter(){
    let env = this;
    this.nativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }

  doFbLogout(){
    var nav = this.navCtrl;
    this.facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('user');
      nav.push(LoginPage);
    }, function(error){
      console.log(error);
    });
  }
}
