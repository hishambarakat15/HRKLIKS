import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { HttpService } from '../../core/services/http.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [MessageService],
})
export class FooterComponent {
  email: string = '';
  private readonly messageService = inject(MessageService);
  private readonly _httpService = inject(HttpService);

  onSubmit(form: any) {
    if (form.valid) {
      const payload = {
        email: this.email,
      };
      this._httpService.createSubscription(payload).subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res,
        });
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
