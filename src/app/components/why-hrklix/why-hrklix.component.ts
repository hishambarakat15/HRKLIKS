import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-why-hrklix',
  standalone: true,
  imports: [CarouselModule,TranslateModule ,  RouterLink],
  templateUrl: './why-hrklix.component.html',
  styleUrl: './why-hrklix.component.scss'
})
export class WhyHrklixComponent {
  isRTL: boolean = false; // Default to LTR
    
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    margin: 0,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    rtl: true,
  }
}
