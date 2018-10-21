import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  num=2;
  change(event){
    console.log(event);
    this.num=event.target.value;
  }
  ngOnInit() {
    this.http.get('/api/courses').subscribe(data=>{
      this.courses = data;
    })
    
  }

}
export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string, 
      public task:number,
      public person:number
  ){}
}