import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {


  token:any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
   }

   getallNote()
  {
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token
      })
    }

    return this.httpService.GetService('https://localhost:44306/api/Notes/Read',true,header)
  }


}
