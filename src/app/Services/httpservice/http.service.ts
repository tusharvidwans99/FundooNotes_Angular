import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpClient: HttpClient) { }

  PostService(url:string, data:any, token:boolean=false, options:any){
    return this.httpClient.post(url,data,token && options);
  }

  
  
}