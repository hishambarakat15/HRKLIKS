import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mobil-app',
  standalone: true,
  imports: [TranslateModule, CarouselModule, NgForOf, NgClass],
  templateUrl: './mobil-app.component.html',
  styleUrl: './mobil-app.component.scss',
})
export class MobilAppComponent {
  isRTL: boolean = false; // Default to LTR

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  images: string[] = [
    '../../../assets/images/slider1.jpeg',
    '../../../assets/images/mobile9.jpeg',
    '../../../assets/images/slider2.jpeg',
    '../../../assets/images/slider3.jpeg',
    '../../../assets/images/slider4.jpeg',
    '../../../assets/images/slider5.jpeg',
  ];

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe((event) => {
      this.isRTL = event.lang === 'ar'; // إذا كانت العربية، فعّل RTL
      this.updateCarouselOptions();
    });

    // التحقق من اللغة عند بدء التشغيل
    this.isRTL = this.translateService.currentLang === 'ar';
    this.updateCarouselOptions();
  }

  private updateCarouselOptions(): void {
    this.carouselOptions = { ...this.carouselOptions, rtl: this.isRTL };
  }
}
