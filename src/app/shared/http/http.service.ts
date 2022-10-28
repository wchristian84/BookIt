import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  firebaseRootURL: string = 'https://book-it-ba658-default-rtdb.firebaseio.com/books.json'

  constructor(private http: HttpClient, private bookshelfService: BookshelfService) { }

  saveDataToFirebase () {
    const books = this.bookshelfService.getBooks();

    this.http.put(this.firebaseRootURL, books).subscribe((response) => {
      console.log('Firebase Put Request: ', response);
    })
  }

  fetchDataFromFirebase () {
    return this.http.get(this.firebaseRootURL).pipe(tap((response: Book[]) => {
      this.bookshelfService.setBooks(response);
      })
    );
  }

}
