import { Injectable } from '@angular/core';
import { DataService } from '../service/DataService';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends DataService<User> {
  constructor(http: HttpClient) {
    super(http);
  }

  protected getUrl(): string {
    return environment.userApiUrl;
  }
  getAllUsers(): Observable<User[]> {
    const url = `${this.getUrl()}`;
    return this.getAll(url);
  }
  grantAccess(email: string): Observable<User> {
    const url = `${this.getUrl()}/grant`;
    return this.update(url, email, undefined);
  }
  revokeAccess(email: string): Observable<User> {
    const url = `${this.getUrl()}/revoke`;
    return this.update(url, email, undefined);
  }
  getByEmail(email: string): Observable<User> {
    const url = `${this.getUrl()}/email`;
    return this.getById(url, email);
  }
}
