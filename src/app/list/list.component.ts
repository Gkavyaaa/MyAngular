import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tableTime:boolean=false;
  constructor(){
   setTimeout(() => {
     this.tableTime=true;
   }, 1000);
}

}
