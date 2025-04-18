import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { HttpService } from '../../core/services/http.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    NgClass,
    DialogModule,
    ToastModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [MessageService],
})
export class ContactUsComponent {
  private readonly FormBuilder = inject(FormBuilder);
  private readonly _httpService = inject(HttpService);
  private readonly messageService = inject(MessageService);

  visible: boolean = false;
  isloading: boolean = false;

  contactUsForm: FormGroup = this.FormBuilder.group({
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    CompanyName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    PhoneNumber: [
      '',
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ],
    CountryCode: ['', [Validators.required]],
    subject: ['', [Validators.required]],
  });

  contactUsSubmit(): void {
    this.isloading = true;

    const payload = {
      Name:
        this.contactUsForm.value.FirstName +
        ' ' +
        this.contactUsForm.value.LastName,
      CompanyName: this.contactUsForm.value.CompanyName,
      Email: this.contactUsForm.value.email,
      Phone: this.contactUsForm.value.PhoneNumber,
      Subject: this.contactUsForm.value.subject,
    };
    this._httpService.contactUsTenant(payload).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res,
      });
      // this.visible = true;
      this.contactUsForm.reset();
      this.isloading = false;
    });
  }
}
