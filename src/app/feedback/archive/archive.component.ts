import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from '../feedback.service';
import { PopupComponent, PopupData } from 'src/app/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  archives: Feedback[] = [];
  constructor(
    private feedbackService: FeedbackService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.feedbackService
      .getAllArchives()
      .subscribe((feedbacks: Feedback[]) => (this.archives = feedbacks));
  }
  deleteFeedback(feedback: Feedback) {
    const data: PopupData = {
      title: 'Delete feedback',
      content: ['Are you sure to delete this feedback'],
      positiveButton: 'Yes',
      negativeButton: 'No',
    };
    const dialogRef = this.dialog.open(PopupComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.feedbackService.deleteFeedback(feedback.id!).subscribe(() => {
          this.feedbackService
            .getAllArchives()
            .subscribe((feedbacks: Feedback[]) => (this.archives = feedbacks));
        });
      } else {
        return;
      }
    });
  }
}
