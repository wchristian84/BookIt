import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {
idx: number;
isEditMode = false;
bookDetails: Book;

  constructor(private route: ActivatedRoute, private bookshelfService: BookshelfService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.idx = +params['id'];
        this.isEditMode = params['id'] != null;

        if (this.isEditMode) {
          this.bookDetails = this.bookshelfService.getBook(this.idx);
        }
      }
    )
  }

  onSubmit(form: NgForm) {
    const { title, author, genre, coverImagePath } = form.value;

    this.bookDetails = new Book(title, author, genre, coverImagePath);

    if (this.isEditMode) {
      this.bookshelfService.updateBook(this.idx, this.bookDetails)
    } else {
      this.bookshelfService.saveBook(this.bookDetails);
    }

    this.onResetForm();
  }

  onResetForm() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
