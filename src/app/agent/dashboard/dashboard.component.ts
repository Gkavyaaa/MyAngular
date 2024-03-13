import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

// interface TaskAllotDetails{
//   id:number;
//   taskId:number;
//   developerid:number;
//   assignedby:number;
//   assignedat:number;
//   status:String;
// }
interface UserDetails{
  id:number;
  name:string;
  email:string;
  role:string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
   employeeDatas!:UserDetails[];
   //taskallot!:TaskAllotDetails[]
  constructor(
    private http: HttpClient
  ){
    let request$:Observable<any> = this.http.get("http://localhost:8080/getUser");
    request$.subscribe((res) => {
      console.log('table data -->',res);
      this.employeeDatas=res.data;
    })
    // let request1$ = this.http.get("http://localhost:8080/gettaskallot");
    // request1$.subscribe((res:any) =>{
    //   console.log('res -->',res);
    //   this.taskallot=res.data;
    // })
  }
}
