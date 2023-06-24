import { Role } from './role';

export class Faq {
  id?: string;
  question?: string;
  answer?: string;
  role?: string;
  isUpdate?: boolean;
  expanded?: boolean;
  constructor(question: string, answer: string, role: string) {
    this.question = question;
    this.answer = answer;
    this.role = role;
  }
}
