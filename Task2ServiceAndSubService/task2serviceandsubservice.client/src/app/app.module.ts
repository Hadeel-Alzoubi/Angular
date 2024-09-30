import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    LectureComponent,
    SubscriptionComponent,
    SubservicedetailsComponent
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
        { path: "details/:id", component: SubservicedetailsComponent }
        
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
