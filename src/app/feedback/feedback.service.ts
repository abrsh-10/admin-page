import { Injectable } from '@angular/core';
import { DataService } from '../service/DataService';
import { Feedback } from '../models/feedback';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService extends DataService<Feedback> {
  constructor(http: HttpClient) {
    super(http);
  }

  protected getUrl(): string {
    return environment.feedbackApiUrl;
  }
  getAllFeedbacks(): Observable<Feedback[]> {
    const url = `${this.getUrl()}`;
    return this.getAll(url);
  }
  getAllArchives(): Observable<Feedback[]> {
    const url = `${this.getUrl()}/archives`;
    return this.getAll(url);
  }
  archiveFeedback(feedbackId: string): Observable<Feedback> {
    const url = `${this.getUrl()}/archive`;
    return this.update(url, feedbackId, undefined);
  }
  deleteFeedback(feedbackId: string): Observable<Feedback> {
    const url = `${this.getUrl()}/id`;
    return this.delete(url, feedbackId);
  }
}
