import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs/internal/Observable';
import { ServiceService } from 'src/app/service/service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user';
  constructor(private service: ServiceService) {}

  public getAllUsers(): Observable<User[]> {
    return this.service.get(this.apiUrl);
  }
  public addUser(user: User) {
    return this.service.post(user, this.apiUrl);
  }
  public deleteUser(email: String) {
    const url = `${this.apiUrl}/email/${email}`;
    return this.service.delete(url);
  }
  public grantAccess(email: String) {
    const url = `${this.apiUrl}/grant/${email}`;
    return this.service.put(url);
  }
  public revokeAccess(email: String) {
    const url = `${this.apiUrl}/revoke/${email}`;
    return this.service.put(url);
  }
}
