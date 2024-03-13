import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Layout1Component } from './layout1/layout1.component';
import { SharedModule } from './shared/shared.module';
import { ShadowComponent } from './shadow/shadow.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashoardauthComponent } from './dashoardauth/dashoardauth.component';
import { AppService } from './app.service';
import { Router, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { ViewDetailsComponent } from './view-details/view-details.component';

// export const routes: Router = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     canActivate: [loginAuth()],
//     component: LoginComponent
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    ShadowComponent,
    ListComponent,
    LoginComponent,
    DashoardauthComponent,
    DetailsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[Layout1Component],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
