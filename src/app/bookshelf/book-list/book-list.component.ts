import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "../../shared/book/book.model";
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  @Output() currentBookSelected = new EventEmitter<Book>();
  myBooks: Book[] = []

  constructor(private bookshelfService: BookshelfService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();

    this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
      this.myBooks = books;
    })
  }

  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onRemoveBook (idx: number) {
    this.bookshelfService.removeBook(idx);
  }
  ngOnDestroy(): void {

  }
}
