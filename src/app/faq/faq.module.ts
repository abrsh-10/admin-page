import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FaqComponent, FormComponent],
  imports: [CommonModule, FaqRoutingModule, FormsModule, MatDialogModule],
})
export class FaqModule {}
