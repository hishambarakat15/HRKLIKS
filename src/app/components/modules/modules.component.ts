import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {
  isRTL: boolean = false; // Default to LTR
  
    customOptions: OwlOptions = {
      items: 1,
      loop: true,
      dots: true,
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
          items: 1,
        },
        400: {
          items: 1,
        },
        740: {
          items: 1,
        },
        940: {
          items: 1,
        },
      },
    };
  
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
      this.customOptions = { ...this.customOptions, rtl: this.isRTL };
    }

}
