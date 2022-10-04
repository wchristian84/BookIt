import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() currentPage = new EventEmitter<string>();
  collapsed = true;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectPage(page: string) {
    console.log('selectPage:', page);

    this.currentPage.emit(page);
  }

}
