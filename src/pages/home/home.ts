import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//pages secondaire
import { VuactuPage } from '../vuactu/vuactu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
private vct(){
  this.navCtrl.push(VuactuPage);
}
}


