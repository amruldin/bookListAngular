import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAllNewBooksComponent} from './list-all-new-books/list-all-new-books.component';
import {SearchBooksComponent} from './search-books/search-books.component';





const routes: Routes = [
  {path:'allNewBooks',component:ListAllNewBooksComponent},
  {path:'searchBooks',component:SearchBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
