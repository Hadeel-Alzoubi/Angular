import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7254/api";
  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services`);
  }

  getSubServiceByID(id : any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyServiceID/${id}`);
  }

  getSubServiceDetails(id: any): Observable<any> {
    
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyID/${id}`);
  }


  subscribtion(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscrition`);
  }

  // the Data Will Get From the function in the service subscribtion
  addUSerSubScription(data : any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubscribtion`,data)
  }
}
