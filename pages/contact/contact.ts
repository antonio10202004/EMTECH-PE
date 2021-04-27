import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  activity:number;

  weight:number;
  duration:number;
  burnedCalories:number;
  weightLoss:number;

  constructor(public navCtrl: NavController) {

  }



  calculateBURNEDCALORIES(){
    this.burnedCalories = ((this.activity*3.5*this.weight)/200)*this.duration;
    this.burnedCalories = parseFloat (this.burnedCalories.toFixed(2));
  }

  calculateWEIGHTLOSS(){
    this.weightLoss = (this.burnedCalories)/7700;
    this.weightLoss = parseFloat (this.weightLoss.toFixed(3));
  }

}
