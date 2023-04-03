import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public get(apiUrl: string): Observable<User[]> {
    return this.http.get<User[]>(apiUrl);
  }
  public post(user: any, apiUrl: string) {
    return this.http.post(apiUrl, user, httpOptions);
  }
  public delete(apiUrl: string) {
    return this.http.delete(apiUrl);
  }
  public put(apiUrl: string) {
    return this.http.put(apiUrl, null);
  }
}
