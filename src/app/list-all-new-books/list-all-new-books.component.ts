import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';



@Component({
  selector: 'app-list-all-new-books',
  templateUrl: './list-all-new-books.component.html',
  styleUrls: ['./list-all-new-books.component.css']
})
export class ListAllNewBooksComponent implements OnInit {

  allNewBooks: Object;

  constructor(private _http:HttpServiceService) { }

  ngOnInit(): void {
    this._http.getAllNewBooks().subscribe(data=>{
      this.allNewBooks = data['message'];
      
      console.log(this.allNewBooks[0]);  
    });

  }

}
