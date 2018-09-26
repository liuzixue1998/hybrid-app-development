import { Component,EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Output() keyup:EventEmitter<number> = new EventEmitter<number>();
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
  this.keyup.emit(e);
}


}
