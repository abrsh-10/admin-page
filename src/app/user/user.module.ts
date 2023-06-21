import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
  exports: [UsersComponent, UserComponent],
})
export class UserModule {}
