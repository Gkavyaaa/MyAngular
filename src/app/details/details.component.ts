import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskAllotDetails } from '../app.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() id: number = 20;
  taskAllocationData: TaskAllotDetails[] = [];
  @Output() detailsEmit = new EventEmitter();


  
  constructor(private http:HttpClient,private router:Router,private appService:AppService){
    
  }
  @Input('taskData$')
  set taskData(data$: Observable<any>) {

    if (typeof data$ === 'undefined') {
      return;
    }
    data$.subscribe((res) => {
      console.log('child component table data -->', res);
      this.taskAllocationData = res.data;
    })

  }
  editData(data: any) {
    this.detailsEmit.emit({ type: 'task', data });
    this.appService.settaskDetails(data);
    this.router.navigate(['viewDetails/' +  data.id])
  }

}
