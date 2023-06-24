import { FeedBackSender } from './feedback-sender';

export class Feedback {
  id?: string;
  message?: string;
  sentBy?: FeedBackSender;
  sentAt?: Date;
  isArchived?: Boolean;
}
