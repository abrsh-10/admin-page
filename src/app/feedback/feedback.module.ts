import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [FeedbackComponent, ArchiveComponent],
  imports: [CommonModule, FeedbackRoutingModule],
})
export class FeedbackModule {}
