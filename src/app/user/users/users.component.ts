import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredOption = 'all';
  filteredUser: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
  get usersSortedByName(): User[] {
    return this.users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }
  updateUser(user: User): void {
    if (user.isAllowed) {
      user.isAllowed = false;
      this.userService.revokeAccess(user.email!).subscribe();
    } else {
      user.isAllowed = true;
      this.userService.grantAccess(user.email).subscribe();
    }
  }
  filterTable() {
    this.userService.getAllUsers().subscribe((users) => {
      switch (this.filteredOption) {
        case 'all':
          this.users = users;
          break;
        case 'student':
          this.users = users.filter((user) => user.role === 'Student');
          break;
        case 'teacher':
          this.users = users.filter((user) => user.role === 'Teacher');
          break;
        case 'allowed':
          this.users = users.filter((user) => user.isAllowed);
          break;
        case 'non-allowed':
          this.users = users.filter((user) => !user.isAllowed);
          break;
        default:
          console.log('Invalid filter option');
          break;
      }
    });
  }
}
