import { Component, OnInit } from '@angular/core';
import { Book } from "../../shared/book/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book("Book of Testing", "Nolan", "Mystery", "https://source.unsplash.com/50x50/?mystery,book"),
    new Book("Another Book", "Jacob", "Fiction", 'https://source.unsplash.com/50x50/?fiction,book'),
    new Book("A Third Book", "Some Guy", "Non-fiction", 'https://source.unsplash.com/50x50/?book')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
