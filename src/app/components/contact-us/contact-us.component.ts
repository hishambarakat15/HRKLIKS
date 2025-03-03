import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TranslateModule ,ReactiveFormsModule ,NgClass , DialogModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
private readonly FormBuilder=inject(FormBuilder)
visible: boolean = false;

contactUsForm:FormGroup = this.FormBuilder.group({
    FirstName: ['',[Validators.required]],
    LastName: ['',[Validators.required]],
    JobTitle: ['',[Validators.required]],
    CompanyName :['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    PhoneNumber :['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    CountryCode: ['', [Validators.required]],
  })


  contactUsSubmit():void{
 
      console.log(this.contactUsForm.value)

      this.visible = true;
   
  }

}
