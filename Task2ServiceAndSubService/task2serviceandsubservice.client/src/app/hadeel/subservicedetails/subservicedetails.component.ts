import { Component } from '@angular/core';
import { UrlService } from '../HadeelURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subservicedetails',
  templateUrl: './subservicedetails.component.html',
  styleUrl: './subservicedetails.component.css'
})

export class SubservicedetailsComponent {

  parameter: any
  array :any
  ngOnInit() {
    this.parameter = this._rout.snapshot.paramMap.get("id");
    this.getDetails(this.parameter)
  }

  constructor(private _ser: UrlService, private _rout: ActivatedRoute) { }

  DetailsArray: any
  getDetails(id: any) {
    this._ser.getSubServiceDetails(id).subscribe((data) => {
      this.DetailsArray = data 
    })
  }
}
