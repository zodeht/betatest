import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VisitPage } from '../visit/visit';

/**
 * Generated class for the ProfesseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-professeur',
  templateUrl: 'professeur.html',
})
export class ProfesseurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesseurPage');
  }
private vvisit(){
  this.navCtrl.push(VisitPage);
}
}
