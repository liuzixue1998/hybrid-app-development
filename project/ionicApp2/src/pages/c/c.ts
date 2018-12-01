import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public params: NavParams,public modalCtrl: ModalController) {
    console.log('UserId', params.get('userId'));
  }
  

  ionViewDidLoad() {
    let profileModal = this.modalCtrl.create(AddPage);
    profileModal.present();
    
  }

}
