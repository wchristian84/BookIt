import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private bookListSub: Subscription;

  constructor(private bookshelfService: BookshelfService) {
  }

  ngOnInit(): void {
    this.bookshelfService.bookListChanged.subscribe((data) => {
      console.log(data);
      let book = data[data.length - 1];
      alert(`title: ${book.title}\nauthor: ${book.author}\nwas added to your bookshelf`);
    })
  }

  ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }

}
