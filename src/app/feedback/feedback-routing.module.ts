import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FeedbackComponent },
  { path: 'archives', pathMatch: 'full', component: ArchiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackRoutingModule {}
