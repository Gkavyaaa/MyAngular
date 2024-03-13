import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit{
  detailsFormGroup!:FormGroup;
  constructor(
    private http:HttpClient,
    private fb:FormBuilder,
    private appService:AppService
  ){
  }
  ngOnInit():void{
    this.detailsFormGroup=this.fb.group(
      {
        id:new FormControl({value:'',disabled:true}),
        // taskId:new FormControl({value:'',disabled:true}),
        // developerid:new FormControl({value:'',disabled:true}),
        // assignedby:new FormControl({value:'',disabled:true}),
        status:['']
      });
      this.appService.getTaskDetails().subscribe((res) => {
        console.log('app details -->',res);
        this.detailsFormGroup.patchValue({
          // id:[''],
          id:res.id,
        //  taskId:res.task_id,
        //  developerid:res.developerId,
        //  assignedby:res.assignedBy,
         status:res.status
        })
      })
  }
  onSubmit(){
    console.log('on submit -->',this.detailsFormGroup.getRawValue());
    let request$ = this.http.put("http://localhost:8080/updateTaskAllot",
    this.detailsFormGroup.getRawValue());
    request$.subscribe((res :any) =>{
    })
  }
}
