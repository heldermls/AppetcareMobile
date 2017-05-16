import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroTutorPage } from '../pages/cadastro-tutor/cadastro-tutor';
import { CadastroPetPage } from "../pages/cadastro-pet/cadastro-pet";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav ;
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {

    this.pages = [
        {title: 'Appetcare', component: HomePage},
        {title: 'Perfil', component: HomePage},
        {title: 'Serviços', component: HomePage},
        {title: 'Cadastro de Tutor', component: CadastroTutorPage},
        {title: 'Cadastro de Pet', component: CadastroPetPage},
        {title: 'Consultas', component: HomePage},
        {title: 'Localizar Petshop', component: HomePage},
        {title: 'Sobre', component: HomePage},
        {title: 'Localizar ONGs', component: HomePage},
        {title: 'Vacinas', component: HomePage},
        {title: 'Vermifugo', component: HomePage},
        {title: 'Medicamentos', component: HomePage}
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
