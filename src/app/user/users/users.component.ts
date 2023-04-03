import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users) => (this.users = users));
  }

  onDelete(user: User): void {
    console.log('Deleted');
    // this.userService
    //   .deleteUser(user.email)
    //   .subscribe(
    //     () => (this.users = this.users.filter((u) => u.email !== user.email))
    //   );
  }
  onUpdate(user: User): void {
    console.log('Updated');
    // if (user.isAllowed) {
    //   user.isAllowed = false;
    //   this.userService.revokeAccess(user.email).subscribe();
    // } else {
    //   user.isAllowed = true;
    //   this.userService.grantAccess(user.email).subscribe();
    // }
  }
}
