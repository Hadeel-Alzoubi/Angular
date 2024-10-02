import { Component } from '@angular/core';
import { UrlService } from '../../HadeelURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  imageFile: any
  changeImage(event: any) {

    this.imageFile = event.target.files[0]

  }

  constructor(private _ser: UrlService, private _router: Router) { }

  AddNewService(data: any) {
    var formdata = new FormData();


    for (let item in data) {
      formdata.append(item, data[item])
    }

    formdata.append("ServiceImage", this.imageFile)
    console.log(formdata)

    this._ser.AddService(formdata).subscribe(() => {
      alert("Service add successfully!")
      this._router.navigate(['/services']);
    }, (error) => {
      alert(error.error)
    })
  }
}
