import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//liens
import { AddquestPage } from '../addquest/addquest';
import { VueRepPage } from '../vue-rep/vue-rep';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  private goquest(){
    this.navCtrl.push(AddquestPage);
  }

  private rep(){
    this.navCtrl.push(VueRepPage);
  }

}
