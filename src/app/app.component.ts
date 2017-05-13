import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroTutorPage } from '../pages/cadastro-tutor/cadastro-tutor';
import { PicturePage } from  '../pages/picture/picture';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav ;
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {

    this.pages = [
       {title: 'Foto do PET', component: PicturePage},
        {title: 'homePage', component: HomePage},
        {title: 'cadastroTutorPage', component: CadastroTutorPage}
       
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    this.menu.close();
    this.nav.setRoot(page.component);
  }

}
