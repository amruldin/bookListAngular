import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
  allNewBooksUrl:string = "https://api.itbook.store/1.0/new";
  private searchBooksUrl:string = "https://api.itbook.store/1.0/search/mongodb";
  

  constructor(private http:HttpClient) { }


  getAllNewBooks(){
    return this.http.get("https://dog.ceo/api/breed/hound/images");
  }
}

