import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
  exports: [UsersComponent],
})
export class UserModule {}
