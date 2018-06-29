import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VuedevoirPage } from '../vuedevoir/vuedevoir';
/**
 * Generated class for the DevoirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-devoir',
  templateUrl: 'devoir.html',
})
export class DevoirPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevoirPage');
  }

  private vdevoir(){
    this.navCtrl.push(VuedevoirPage);
  }

}
