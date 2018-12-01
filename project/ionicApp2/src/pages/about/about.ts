import { Component, ViewChild } from '@angular/core';
import { NavController, Slides,NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  title:string;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.title=this.params.get('title');

    //当参数没有定义的情况
    if(this.title == undefined){
      this.title = "没有获取到结果";
    }

  }
  pushHomePage(){
    this.navCtrl.pop();
  }

  ionViewDidLoad(){
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
}
