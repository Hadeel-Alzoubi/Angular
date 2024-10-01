import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../HadeelURL/url.service';

@Component({
  selector: 'app-rigestration-user',
  templateUrl: './rigestration-user.component.html',
  styleUrl: './rigestration-user.component.css'
})
export class RigestrationUserComponent {
  ngOnInit() { }

  constructor(private _ser: UrlService, private _router: Router) { }



  addNewUser(data: any) {
    var formdata = new FormData();

    for (let item in data) {
      formdata.append(item, data[item])
    }
    debugger;
    this._ser.AddUserRegester(formdata).subscribe(() => {
      alert("User Add Successfuly!")
      this._router.navigate(['login']);
    }, (error) => {
      alert(error.error)
    })
  }
}
