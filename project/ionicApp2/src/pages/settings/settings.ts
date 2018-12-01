import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=this.navParams.get('title');

    //当参数没有定义的情况
    if(this.title == undefined){
      this.title = "没有获取到结果";
    }

  }
  pushHomePage(){
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
