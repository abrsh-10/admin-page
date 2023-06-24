import { Component } from '@angular/core';
import { PopupComponent, PopupData } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private dialog: MatDialog, private route: Router) {}

  get visible() {
    if (this.route.url == '/login' || this.route.url == '/error') {
      return false;
    }
    return true;
  }

  logout() {
    const data: PopupData = {
      title: 'Logout',
      content: ['Are you sure to logout'],
      positiveButton: 'Yes',
      negativeButton: 'No',
    };
    const dialogRef = this.dialog.open(PopupComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        sessionStorage.removeItem('email');
        window.location.href = 'http://localhost:4202';
      } else {
        return;
      }
    });
  }
}
