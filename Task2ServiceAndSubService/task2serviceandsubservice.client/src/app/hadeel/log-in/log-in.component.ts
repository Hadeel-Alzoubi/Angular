import { Component } from '@angular/core';
import { UrlService } from '../HadeelURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private _ser: UrlService, private _router: Router) { }



  checkIfUserLogin(data: any) {
    var formdata = new FormData();
    for (let item in data) {
      formdata.append(item, data[item])
    }

    this._ser.UserLogin(formdata).subscribe(() => {
      this._router.navigate(['/']);
    }, (error) => {
      alert(error.error)
    })
  }
}
