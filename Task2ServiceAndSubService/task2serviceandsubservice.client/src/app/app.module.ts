import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './hadeel/nav-bar/nav-bar.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './hadeel/home/home.component';
import { ServicesComponent } from './hadeel/services/services.component';
import { SubServicesComponent } from './hadeel/sub-services/sub-services.component';
import { LectureComponent } from './hadeel/lecture/lecture.component';
import { SubscriptionComponent } from './hadeel/subscription/subscription.component';
import { SubservicedetailsComponent } from './hadeel/subservicedetails/subservicedetails.component';
import { RigestrationUserComponent } from './hadeel/rigestration-user/rigestration-user.component';
import { LogInComponent } from './hadeel/log-in/log-in.component';
import { DashboardComponent } from './hadeel/Admin/dashboard/dashboard.component';
import { AddServiceComponent } from './hadeel/Admin/add-service/add-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    LectureComponent,
    SubscriptionComponent,
    SubservicedetailsComponent,
    RigestrationUserComponent,
    LogInComponent,
    DashboardComponent,
    AddServiceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent, pathMatch: "full" },
        { path: "Services", component: ServicesComponent },
        { path: "SubServices/:id", component: SubServicesComponent },
        { path: "lecture", component: LectureComponent },
        { path: "subscribtion", component: SubscriptionComponent },
        { path: "details/:id", component: SubservicedetailsComponent },
        { path: "registration", component: RigestrationUserComponent },
        { path: "login", component: LogInComponent },
        {
          path: "Admin", component: DashboardComponent, children: [
            { path: "addService", component: AddServiceComponent }
        ] }
        
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
