import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  formattedString: string = "";
  booklistChanged = new Subject<Book[]>();
  allBooks: Book[] = []

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.allBooks.slice();
  }
  fetchBooks(search: string) {
    this.formattedString = search.split(' ').join('+').toLowerCase();
    console.log('Search Input: ', this.formattedString);
    this.http.get('http://openlibrary.org/search.json' + '?q=' + this.formattedString).subscribe((data) => {
    this.allBooks = [];
    this.saveBooks(data);
    });
  }

  saveBooks(books) {
    books.docs.map((book) => {
      // console.log(book);
      const {title, author_name, first_publish_year, isbn} = book;

      const newBook = new Book (
        title,
        author_name ? author_name[0] : '',
        "",
        "",
        0,
        first_publish_year,
        isbn ? isbn[0] : ''
      );
      this.allBooks.push(newBook);
    });

    this.booklistChanged.next(this.allBooks.slice());
  }
}

