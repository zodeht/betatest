import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { DevoirPage } from '../devoir/devoir';
import { MespublicaPage } from '../mespublica/mespublica';
import { MonrangPage } from '../monrang/monrang';
import { ProfesseurPage } from '../professeur/professeur';


/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  private vuequestions(){
    this.navCtrl.push(QuestionsPage);
  }

  private vuedevoir(){
    this.navCtrl.push(DevoirPage);
  }

  private vumspubli(){
    this.navCtrl.push(MespublicaPage);
  }
private vrang(){
  this.navCtrl.push(MonrangPage);
}
private vuprof(){
  this.navCtrl.push(ProfesseurPage);
}

}
