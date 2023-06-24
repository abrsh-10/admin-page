import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Faq } from 'src/app/models/faq';
import { Role } from 'src/app/models/role';

export interface FormData {
  title: string;
  positiveButton: string;
  negativeButton?: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  question?: string;
  answer?: string;
  role = 'Student';
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormData
  ) {}

  returnTrue(): void {
    console.log(this.role);
    const faq = new Faq(this.question!, this.answer!, this.role!);
    this.dialogRef.close(faq);
  }

  returnFalse(): void {
    this.dialogRef.close(false);
  }
}
