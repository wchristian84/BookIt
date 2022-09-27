import { Component, OnInit } from '@angular/core';
import { Book } from "../../shared/book/book.model";

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [
    new Book("Book of Testing", "Nolan", "Mystery", "https://source.unsplash.com/50x50/?mystery,book"),
    new Book("Another Book", "Jacob", "Fiction", 'https://source.unsplash.com/50x50/?fiction,book'),
    new Book("A Third Book", "Some Guy", "Non-fiction", 'https://source.unsplash.com/50x50/?book'),
    new Book("Some Other Book", "Another Guy", "Non-fiction", 'https://source.unsplash.com/50x50/?book'),
    new Book("Book, Again", "Some Lady", "Fiction", 'https://source.unsplash.com/50x50/?fiction,book'),


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
