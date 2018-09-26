import { Component,EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;

  constructor() { }

  ngOnInit() {
  }
  username='';
  todolist=[];
  donelist=[];
  deleteTodo(index, done) {
    if (done) {
      this.todolist.splice(index, 1);
    } else {
      this.donelist.splice(index, 1);
    }
  }
  changeTodo(index, done) {
    if (done) {
      var Todo = this.todolist[index]
      this.donelist.push(Todo);
      this.todolist.splice(index, 1);
    } else {
      var Done = this.donelist[index]
      this.todolist.push(Done);
      this.donelist.splice(index, 1);
    }
   
  }
  

}
