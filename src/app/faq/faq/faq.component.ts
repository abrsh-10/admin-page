import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/faq';
import { FaqService } from '../faq.service';
import { FormComponent, FormData } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent, PopupData } from 'src/app/popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [];
  answer?: string;
  constructor(
    private faqService: FaqService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit() {
    this.faqService.getAllFaqs().subscribe((faqs: Faq[]) => (this.faqs = faqs));
  }
  updateModeToggler(faq: Faq) {
    faq.isUpdate = !faq.isUpdate;
  }
  displayForm() {
    const data: FormData = {
      title: 'Upload FAQ Form',
      positiveButton: 'Upload',
      negativeButton: 'Cancel',
    };
    const dialogRef = this.dialog.open(FormComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.faqService.addFaq(result).subscribe(() => {
          this.faqService
            .getAllFaqs()
            .subscribe((faqs: Faq[]) => (this.faqs = faqs));
        });
      } else {
        return;
      }
    });
  }
  expand(faq: Faq) {
    faq.expanded = !faq.expanded;
  }
  updateFaq(faq: Faq) {
    this.faqService.editFaq(faq.id!, this.answer!).subscribe(() => {
      this.faqService
        .getAllFaqs()
        .subscribe((faqs: Faq[]) => (this.faqs = faqs));
    });
  }
  deleteFaq(faq: Faq) {
    const data: PopupData = {
      title: 'Delete FAQ',
      content: ['Are you sure to delete this FAQ'],
      positiveButton: 'Yes',
      negativeButton: 'No',
    };
    const dialogRef = this.dialog.open(PopupComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.faqService.deleteFaq(faq.id!).subscribe(() => {
          this.faqService
            .getAllFaqs()
            .subscribe((faqs: Faq[]) => (this.faqs = faqs));
        });
      } else {
        return;
      }
    });
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
