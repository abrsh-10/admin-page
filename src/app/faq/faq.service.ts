import { Injectable } from '@angular/core';
import { DataService } from '../service/DataService';
import { Faq } from '../models/faq';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaqService extends DataService<Faq> {
  constructor(http: HttpClient) {
    super(http);
  }

  protected getUrl(): string {
    return environment.faqApiUrl;
  }
  getAllFaqs(): Observable<Faq[]> {
    const url = `${this.getUrl()}`;
    return this.getAll(url);
  }
  addFaq(faq: Faq) {
    const url = `${this.getUrl()}`;
    return this.add(url, faq);
  }
  editFaq(id: String, answer: string) {
    const url = `${this.getUrl()}/id`;
    return this.update(url, id, answer);
  }
  deleteFaq(id: String) {
    const url = `${this.getUrl()}/id`;
    return this.delete(url, id);
  }
}
