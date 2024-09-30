import { Component } from '@angular/core';
import { UrlService } from '../HadeelURL/url.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  ngOnInit() {
    this.getApiSwaggerFunctionFromURL_Service_Subscribtion()
  }

  constructor(private _ser: UrlService) {

  }

  
  subArray:any
  getApiSwaggerFunctionFromURL_Service_Subscribtion() {
    //data is a variable like x in api
    this._ser.subscribtion().subscribe((data) => {
      this.subArray = data
    })
  }

  //this from swagger frombody
  data = {
    "userId": 1,
    "subscriptionId": 0,
    "subServiceId": 1
  }


  AddUserSubScribtion(id : number) {
    //debugger;
    this.data.subscriptionId = id
    this._ser.addUSerSubScription(this.data).subscribe(() => {
      alert("User Add Successfully")
    })
  }
}
