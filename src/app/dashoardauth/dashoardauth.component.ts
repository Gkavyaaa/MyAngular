import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskAllotDetails } from '../app.model';

@Component({
  selector: 'app-dashoardauth',
  templateUrl: './dashoardauth.component.html',
  styleUrls: ['./dashoardauth.component.scss']
})
export class DashoardauthComponent {

  taskAllocationDetails!: TaskAllotDetails[];
 
  taskAllocationDetails$!: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  getTaskallocation() {
    let request$ = this.http.get("http://localhost:8080/gettaskallot");
    request$.subscribe((res) => {
      this.taskAllocationDetails$ = of(res);
    });
  }
}

