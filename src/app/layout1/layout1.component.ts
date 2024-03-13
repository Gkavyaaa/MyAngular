import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



interface TaskAllotDetails{
  id:number;
  taskId:number;
  developerid:number;
  assignedby:number;
  assignedat:number;
  status:String;
}
@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss']
})
export class Layout1Component {
  taskallot!:TaskAllotDetails[]
  constructor(
    private http:HttpClient
  ){
    let request$ = this.http.get("http://localhost:8080/gettaskallot");
    request$.subscribe((res:any) =>{
      console.log('res -->',res);
      this.taskallot=res.data;
    })
  }
  
}

