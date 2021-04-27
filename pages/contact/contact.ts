import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  activity:string;
  mets:number;
  weight:number;
  duration:number;
  burnedCalories:number;
  weightLoss:number;

  constructor(public navCtrl: NavController) {

  }

  calculateMETS(){
  if (this.activity = "a"){
    this.mets = 1.3;
  } else if (this.activity = "b"){
    this.mets = 1.5;
  } else if (this.activity = "c"){
    this.mets = 1.8;
  } else if (this.activity = "d"){
    this.mets = 2.0;
  } else if (this.activity = "e"){
    this.mets = 2.2;
  } else if (this.activity = "f"){
    this.mets = 2.5;
  } else if (this.activity = "g"){
    this.mets = 2.5;
  } else if (this.activity = "h"){
    this.mets = 3.5;
  } else if (this.activity = "i"){
    this.mets = 3.5;
  } else if (this.activity = "j"){
    this.mets = 4.3;
  } else if (this.activity = "k"){
    this.mets = 5;
  } else if (this.activity = "l"){
    this.mets = 5;
  } else if (this.activity = "m"){
    this.mets = 5;
  } else if (this.activity = "n"){
    this.mets = 6;
  } else if (this.activity = "o"){
    this.mets = 6.3;
  } else if (this.activity = "p"){
    this.mets = 8;
  } else if (this.activity = "q"){
    this.mets = 8;
  } else if (this.activity = "r"){
    this.mets = 8;
  } else if (this.activity = "s"){
    this.mets = 8.5;
  } else if (this.activity = "t"){
    this.mets = 10;
  } else {
    this.mets = 11.5;
  }

}
  calculateBURNEDCALORIES(){
    this.burnedCalories = ((this.mets*3.5*this.weight)/200)*this.duration;
    this.burnedCalories = parseFloat (this.burnedCalories.toFixed(2));
  }

  calculateWEIGHTLOSS(){
    this.weightLoss = (this.burnedCalories)/7700;
    this.weightLoss = parseFloat (this.weightLoss.toFixed(3));
  }

}
