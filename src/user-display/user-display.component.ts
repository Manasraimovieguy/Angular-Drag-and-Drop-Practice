import { Component, OnInit } from '@angular/core';
import { UserSearchService } from './user-search.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css'],
})
export class UserDisplayComponent implements OnInit {
  searchInput = '';
  users: any[] = [];

  constructor(private userSearch: UserSearchService) {}

  ngOnInit() {}
  searchUsers(): void {
    if (this.searchInput.trim() !== '') {
      this.userSearch.getUserbyId(this.searchInput).subscribe(
        (data: any) => {
          this.users = data.items;
        },
        (error) => {
          console.log('error fetching data: ', error);
        }
      );
    }
  }
}
