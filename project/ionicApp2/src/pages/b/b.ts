import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  settingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settingsPage=SettingsPage;
  }
  pushMorePage(){
    console.log("代码方式跳转");
    //跳转到指定页面
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }
}
