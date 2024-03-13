import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  

  ngOnInit(): void {
       console.log("oninit loaded");     
  }
}
    


