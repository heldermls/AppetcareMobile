import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { NativeStorage  } from '@ionic-native/native-storage';
import { Credencial } from '../../classes/credencial';
import { LoginProvider } from "../../providers/login-provider";
import { Registrar } from '../registrar/registrar';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider]
})
export class LoginPage {
  FB_APP_ID: number = 1790481274612316;
  public credencial : Credencial ;

  constructor(public navCtrl: NavController, public facebook : Facebook, public nativeStorage : NativeStorage,public loginProvider: LoginProvider ) {
    facebook.browserInit(this.FB_APP_ID, "v2.8");
    this.credencial = new Credencial();
  }
  loginComCredencial(){
  this.loginProvider.loginComCredencial(this.credencial);
}
loginComGoogle(){
  this.loginProvider.loginComGoogle();
}
loginComFacebook(){
  this.loginProvider.loginComFacebook();
}
sair(){
  this.loginProvider.sair();
}
doRegister(){
  this.navCtrl.push(Registrar);
}

  doFbLogin(){
    let permissions = new Array();
    let nav = this.navCtrl;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    this.facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array();

      //Getting name and gender properties
      this.facebook.api("/me?fields=name,gender", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
          nav.push(UserPage);
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });
  }
}
