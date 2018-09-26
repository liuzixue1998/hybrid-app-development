import { Component, OnInit } from '@angular/core';
import { LocalstorageService }  from "src/app/services/localstorage.service";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username='';
  todolist=[];
  donelist=[];
  addTodo(e){
    var obj={    
      username:this.username,
  }
  if (e.keyCode==13) {
      this.todolist.push(obj);  
      this.username='';    
  }
}
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
