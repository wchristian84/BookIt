import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  booklistChanged = new EventEmitter<Book[]>();
  allBooks: Book[] = [
    new Book("Book of Testing", "Nolan", "Mystery", "https://source.unsplash.com/50x50/?mystery,book"),
    new Book("Another Book", "Jacob", "Fiction", 'https://source.unsplash.com/50x50/?fiction,book'),
    new Book("A Third Book", "Some Guy", "Non-fiction", 'https://source.unsplash.com/50x50/?book'),
    new Book("Some Other Book", "Another Guy", "Non-fiction", 'https://source.unsplash.com/50x50/?book'),
    new Book("Book, Again", "Some Lady", "Fiction", 'https://source.unsplash.com/50x50/?fiction,book'),
  ]

  getBooks() {
    return this.allBooks.slice();
  }
}
