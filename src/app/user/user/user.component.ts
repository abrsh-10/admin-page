import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  ngOnInit(): void {}

  firstName!: String;
  lastName!: String;
  email!: String;
  role!: Role;
  isAllowed: Boolean = false;
  success: boolean = false;
  constructor() {}
  changeSuccess() {
    this.success = false;
  }

  onSubmit() {
    if (!this.firstName) {
      alert('enter first name please');
      return;
    }
    if (!this.lastName) {
      alert('enter last name please');
      return;
    }
    if (!this.email) {
      alert('enter an email please');
      return;
    }
    if (!this.role) {
      alert('choose a role please');
      return;
    }
    const newUser = {
      id: null,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
      isAllowed: this.isAllowed,
    };
    this.success = true;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.role = Role.Student;
    this.isAllowed = false;
  }
}
