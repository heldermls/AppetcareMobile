import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CadastroTutorPage} from '../pages/cadastro-tutor/cadastro-tutor';
import { CadastroPetPage } from "../pages/cadastro-pet/cadastro-pet";
import { PicturePage } from '../pages/picture/picture';
import { MapaPage } from './../pages/mapa/mapa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProviderServiceProvider } from '../providers/provider-service/provider-service';


import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { UploadPhotoComponent } from '../components/upload-photo/upload-photo';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CadastroTutorPage,
    CadastroPetPage,
    PicturePage,
    UploadPhotoComponent,
    MapaPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CadastroTutorPage,
    CadastroPetPage,
    PicturePage, 
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, ProviderServiceProvider
  ]
})
export class AppModule {}
