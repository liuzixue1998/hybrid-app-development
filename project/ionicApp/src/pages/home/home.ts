import { Component,ViewChild } from '@angular/core';
import { NavController, InfiniteScroll } from 'ionic-angular';
import { BPage } from '../b/b';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('ac') ac;
items = [];
  constructor( public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

defintit(infiniteScroll){
  this.http.get('/api/courses').subscribe(data=>{
    console.log(data);
    infiniteScroll.complete();
  })
}

  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }
  ionViewDidLoad(){
    this.ac.get();
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
