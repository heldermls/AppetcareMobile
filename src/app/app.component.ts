import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroTutorPage } from '../pages/cadastro-tutor/cadastro-tutor';
import { CadastroPetPage } from "../pages/cadastro-pet/cadastro-pet";
import { PicturePage } from  '../pages/picture/picture';
import { MapaPage } from '../pages/mapa/mapa';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav ;
  rootPage = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
  , public menu: MenuController) {

    this.pages = [
        {title: 'Appetcare', component: HomePage, icon: 'home'},
        {title: 'Perfil', component: HomePage, icon: 'person'},
        {title: 'Serviços', component: HomePage, icon: 'ionic'},
        {title: 'Cadastro de Tutor', component: CadastroTutorPage, icon: 'person-add'},
        {title: 'Cadastro de Pet', component: CadastroPetPage, icon: 'paw'},
        {title: 'Consultas', component: HomePage, icon: 'medical'},
        {title: 'Localizar Petshop', component: MapaPage, icon: 'pin'},
        {title: 'Sobre', component: HomePage, icon: 'information-circle'},
        {title: 'Localizar ONGs', component: HomePage, icon: 'locate'},
        {title: 'Vacinas', component: HomePage, icon: 'thermometer'},
        {title: 'Vermifugo', component: HomePage, icon: 'flask'},
        {title: 'Medicamentos', component: HomePage, icon: 'medkit'},
        {title: 'Foto do PET', component: PicturePage, icon: 'camera'}
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
