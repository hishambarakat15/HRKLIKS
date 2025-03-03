
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpService } from '../../core/services/http.service';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [TranslateModule,ReactiveFormsModule ,NgClass , DialogModule , ToastModule ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
  providers: [MessageService]

})
export class LogInComponent {

  private readonly FormBuilder=inject(FormBuilder)
  private readonly messageService=inject(MessageService)
    private readonly _httpService  = inject(HttpService);
  




 msgErorr:string=""
  msgSacces:string=""
  isloading:boolean=false;
  visible = false;


  logInForm:FormGroup = this.FormBuilder.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    jobTitle: ['',[Validators.required]],
    companyName :['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    businessEmail:['',[Validators.required,this.businessEmailValidator() ]],
    phoneNo :['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    companySize: ['', [Validators.required, Validators.min(1)]],
    countryCode: ['', [Validators.required]],
  })

loginSubmit(): void {
this.isloading=true;

  this._httpService.createTenant(this.logInForm.value).subscribe(
    (res) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res });
      this.visible = true; 
      this.logInForm.reset();
      this.isloading=false;
    }
  );


}
openLiveDemo(): void {
  window.open('https://hrdemo.linkedgates.com/', '_blank');
}


/**
 *  Create a custom validator for business email address validation (not personal emails)
 * @returns ValidatorFn
 */
 businessEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null; // Allow empty values (handled by required validator)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const personalDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];

    if (!emailRegex.test(control.value)) {
      return { businessEmail: 'Invalid email format' };
    }

    const domain = control.value.split('@')[1]?.toLowerCase();
    if (personalDomains.includes(domain)) {
      return { businessEmail: 'Please enter a valid business email' };
    }

    return null;
  };
}
}
