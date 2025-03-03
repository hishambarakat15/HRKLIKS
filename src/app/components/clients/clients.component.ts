import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [NgFor,CarouselModule,TranslateModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients = [
    {
      name: 'Eng. Mohamed Fekry',
      role: 'CEO of Zulficar Company',
      feedback: `We have been working with Linked Gates team for over 5 years now. 
      I must say we have come a long way together and Linked Gates has done a wonderful job. 
      At the beginning, Linked Gates went into details for our requirements and came up with 
      a lot of important questions, and this really helped us…`,
      image: '../../../assets/images/zolfakar.jpeg',
    },
    {
      name: 'Dr. Fady',
      role: 'CEO of El Rezeiky pharmacies',
      feedback: `I don’t think I’ve told you recently how fantastic your support is
      and how much we rely on you. You continually deliver outstanding support and never fail 
      to exceed all the expectations that we have!`,
      image: '../../../assets/images/elrezeky (1).jpeg',
    },
    {
      name: 'Dr. Mourad Farouk',
      role: 'Chief executive of Delmar & Attallah',
      feedback: `I am really impressed by the quality of services I received from Linked Gates. 
      They were right on schedule, charged reasonable prices, were professional and courteous in 
      dealings, and delivered well before time. My revenue has increased because of you, and I will 
      definitely use…`,
      image: '../../../assets/images/delmar.jpeg',
    },
    {
      name: 'Mrs. Nehal',
      role: 'HR manager at Scada',
      feedback: `It has been an easy ride being associated with Linked Gates. 
      They provide a wide range of solutions for all spheres of our business. 
      Their software is user-friendly, and the Linked Gates team is readily 
      available 24*7 for support.`,
      image: '../../../assets/images/scada.jpeg',
    },
  ];
  customOptions : OwlOptions = {
    items:1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    margin: 10,
    nav: true,
    rtl:true,
    dots:true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };
  

}
