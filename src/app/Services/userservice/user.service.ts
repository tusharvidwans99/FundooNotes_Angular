import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  constructor(private httpService: HttpService) { 
    this.token=localStorage.getItem("token");
  }


  registration(data: any)
  {
    console.log(data);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.PostService('https://localhost:44306/api/User/Register',data,false,header)
  }

  login(data: any)
  {
    console.log(data);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.PostService('https://localhost:44306/api/User/Login', data, false, header)

  }



}
