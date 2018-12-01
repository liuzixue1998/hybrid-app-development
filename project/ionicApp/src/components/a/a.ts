import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'c',
  templateUrl: 'a.html'
})
export class AComponent {

  text: string;

  constructor() {
    console.log('Hello AComponent Component');
    this.text = '这是A组件';
  }
  get(){
    console.log('');
  }


}
