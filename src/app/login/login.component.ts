import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit() {
    const loginFunction = this.login.bind(this);
    (window as any).getToken = function (response: any) {
      loginFunction(response.credential);
    };
  }

  login(token: string) {
    this.authService.loginWithGoogle(token).subscribe(
      (response) => {
        console.log('Response:', response);
        if (response.email && response.role == 'Admin') {
          this.encryptAndStoreEmail(response.email);
          window.location.href = 'http://localhost:4202/user';
        } else {
          this.router.navigate(['/error']);
        }
      },
      (error) => {
        console.error('Error:', error);
        this.router.navigate(['/error']);
      }
    );
  }
  encryptAndStoreEmail(email: string): void {
    const encryptedEmail = CryptoJS.AES.encrypt(
      email,
      environment.jwtSecret
    ).toString();
    sessionStorage.setItem('token', encryptedEmail);
  }
  toHomePage() {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/home']);
    } else {
      alert('please login first');
    }
  }
}
