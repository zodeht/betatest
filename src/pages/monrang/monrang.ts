import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VisitPage } from '../visit/visit';

/**
 * Generated class for the MonrangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-monrang',
  templateUrl: 'monrang.html',
})
export class MonrangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonrangPage');
  }
  private vvisit(){
    this.navCtrl.push(VisitPage);
  }
}
