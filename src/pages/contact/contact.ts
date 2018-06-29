import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pet = "";
  constructor(public navCtrl: NavController) {
    this.pet="puppies";
  }

}
