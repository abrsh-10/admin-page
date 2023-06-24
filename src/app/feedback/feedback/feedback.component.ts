import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from '../feedback.service';
import { Route, Router } from '@angular/router';
import { PopupComponent, PopupData } from 'src/app/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  constructor(
    private feedbackService: FeedbackService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.feedbackService
      .getAllFeedbacks()
      .subscribe((feedbacks: Feedback[]) => (this.feedbacks = feedbacks));
  }
  archiveFeedback(feedback: Feedback) {
    const data: PopupData = {
      title: 'Archive feedback',
      content: ['Are you sure to archive this feedback'],
      positiveButton: 'Yes',
      negativeButton: 'No',
    };
    const dialogRef = this.dialog.open(PopupComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.feedbackService.archiveFeedback(feedback.id!).subscribe(() => {
          this.feedbackService
            .getAllFeedbacks()
            .subscribe((feedbacks: Feedback[]) => (this.feedbacks = feedbacks));
        });
      } else {
        return;
      }
    });
  }
}
