import { NgModule, inject } from "@angular/core";
import { AppService } from "./app.service";

import { Layout1Component } from "./layout1/layout1.component";
import { ListComponent } from "./list/list.component";
import { LoginComponent } from "./login/login.component";
import { ShadowComponent } from "./shadow/shadow.component";
import { TableComponent } from "./shared/table/table.component";
import { CanActivateFn, Router, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./agent/dashboard/dashboard.component";
import { DashoardauthComponent } from "./dashoardauth/dashoardauth.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";

const routes: Routes = [{
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
 path:'login',
 canActivate:[LoginAuth()],
 component:LoginComponent
},
 {
   path:'dashboard',
   canActivate:[isAuthenticated()],
   component: DashboardComponent
 },
 {
 path:"layout",
 component:Layout1Component
},
{
 path:"table",
 component:TableComponent
},
{
 path:"shadow",
 component:ShadowComponent
},
{
 path:"list",
 component:ListComponent
},
{
 path:"login",
 component:LoginComponent
},
{
 
   path: "agent",
   loadChildren: () => import("./agent/agent.module").then((m) => m.AgentModule)
 
},{
  path:"dashboard1",
  component:DashoardauthComponent
},
{
  path:"viewDetails/:id",
  // canActivate:[isAuthenticated()],
  component:ViewDetailsComponent
}
];
  export function isAuthenticated(): CanActivateFn {
    return () => {
      const appService:AppService = inject(AppService);
      const router: Router = inject (Router);
      console.log('login check -->',appService.isAuthenticated());
      if (appService.isAuthenticated()) {
        return true;
      }else{
        router.navigate(['login']);
        return false; 
      }
    }
  }
  export function LoginAuth():CanActivateFn{
  return()=>{
    const appService:AppService=inject(AppService);
    const router:Router=inject(Router);
    console.log('login chcek -->',appService.isAuthenticated());
    if(appService.isAuthenticated()){
      router.navigate(['dashboard']);
      return false;
    }else{
      // router.navigate(['login']);
      return true;
    }
  }
  }
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }