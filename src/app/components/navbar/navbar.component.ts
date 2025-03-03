import { NgClass } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private MytranslateService=inject(MytranslateService)
  readonly _TranslateService=inject(TranslateService)

  openLiveDemo(): void {
    window.open('https://hrdemo.linkedgates.com/', '_blank');
  }
  isScrolled: boolean = false;
  isEnglish = true;


  // HostListener to detect the scroll event
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) {  // If scrolled more than 50px
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  changeLang(lang:string) {
    this.MytranslateService.changeLanguage(lang)
  }
 
}
