import { Component } from '@angular/core';
import { IntroPage } from '../intro/intro';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  constructor(public loadingCtrl: LoadingController) {

  }

 

  presentToast() {

   
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

}
