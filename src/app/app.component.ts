import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt';
  pageDisplay = "bookshelf";

  onNavigatePage(page: string) {
    console.log("nav",page);

    this.pageDisplay = page;
  }
}
