import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ShotPage } from '../shot/shot';
import { LivePage } from '../live/live';
import { PostPage } from '../post/post';
import { MatePage } from '../mate/mate';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  homepage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homepage=HomePage;
  }
  close(){
    this.navCtrl.push(this.homepage);
  }
  shott(){
    this.navCtrl.push(ShotPage);
  }
  livee(){
    this.navCtrl.push(LivePage);
  }
  postt(){
    this.navCtrl.push(PostPage);
  }
  matee(){
    this.navCtrl.push(MatePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
