import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StatusPage } from '../pages/status/status';
import { VuactuPage } from '../pages/vuactu/vuactu';
import { QuestionsPage } from '../pages/questions/questions';
import { AddquestPage } from '../pages/addquest/addquest';
import { DevoirPage } from '../pages/devoir/devoir';
import { VuedevoirPage } from '../pages/vuedevoir/vuedevoir';
import { VueRepPage } from '../pages/vue-rep/vue-rep';
import { MespublicaPage } from '../pages/mespublica/mespublica';
import { MonrangPage } from '../pages/monrang/monrang';
import { ProfesseurPage } from '../pages/professeur/professeur';
import { VisitPage } from '../pages/visit/visit';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StatusPage,
    VuactuPage,
    MespublicaPage,
    MonrangPage,
    ProfesseurPage,
    QuestionsPage,
    AddquestPage,
    DevoirPage,
    VuedevoirPage,
    VueRepPage,
    VisitPage,
    TabsPage
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
    StatusPage,
    VuactuPage,
    MespublicaPage,
    MonrangPage, 
    ProfesseurPage,
    QuestionsPage,
    AddquestPage,
    DevoirPage,
    VuedevoirPage,
    VueRepPage,
    VisitPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
