import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private httpClient:HttpClient){}
    loginUser(user:User):Observable<object>{
        console.log(user)
        return this.httpClient.post("http://localhost:8080/login",user)
    }
}