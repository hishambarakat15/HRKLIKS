import { environment } from './../environment/environment';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {
  private language = '';

 
  constructor(
   private _TranslateService:TranslateService ,
   @Inject(PLATFORM_ID) private platId:object , 
  
    ) {


    if(isPlatformBrowser(this.platId)){ // Browser
       // this language will be used as a fallback when a translation isn't found in the current language this._TranslateService.setDefaultLang(  'en'  );
         this._TranslateService.setDefaultLang('en')
         
         const savedLang  = localStorage.getItem('lang')!; 

         if(savedLang ){
          
           this._TranslateService.use(  savedLang  );
         }

         this.changeDirection()
    }

   }

 get isEnglish() {
    return this._TranslateService.currentLang === 'en';
  }
   changeDirection():void {
    if(localStorage.getItem('lang') === 'en'){
          // dir ltr
          document.dir = 'ltr';
    }
    else if (localStorage.getItem('lang') === 'ar') {
      //dir rtl
      document.dir = 'rtl';

    }


   }


   changeLanguage(lang : string):void {
      if(isPlatformBrowser(this.platId)){
        localStorage.setItem('lang'  , lang);
      }

      this._TranslateService.use(lang);
      this.changeDirection();
   }



}
// import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MytranslateService {
//   private translate = inject(TranslateService);
//   private rendererFactory = inject(RendererFactory2);

//   private defaultLang: string = 'en'; // Fallback language if localStorage is unavailable
//   private language = '';
//   private renderer: Renderer2;
//   private currentLanguage = new BehaviorSubject<string>(this.defaultLang);

//   currentLanguage$ = this.currentLanguage.asObservable();

//   constructor() {
//     this.renderer = this.rendererFactory.createRenderer(null, null);
//     this.initLanguage();
//   }

//   get isEnglish() {
//     return this.translate.currentLang === 'en';
//   }

//   changeLanguage() {
//     this.language = this.language === 'en' ? 'ar' : 'en';
//     this.saveLanguageToStorage(this.language);
//     this.translate.use(this.language);
//     this.handleBasicLogic();
//   }

//   instant(key: string | string[]) {
//     return this.translate.instant(key);
//   }

//   private initLanguage() {
//     const lang = this.getLanguageFromStorage();

//     if (lang) {
//       this.language = lang;
//     } else {
//       this.language = this.defaultLang;
//       this.saveLanguageToStorage(this.language);
//     }

//     this.translate.use(this.language);
//     this.translate.setDefaultLang(this.language);
//     this.handleBasicLogic();
//   }

//   private handleBasicLogic() {
//     if (this.language === 'ar') {
//       this.renderer.addClass(document.body, 'rtl');
//       this.renderer.setAttribute(document.body, 'dir', 'rtl');
//       this.currentLanguage.next(this.language);
//     } else {
//       this.renderer.removeClass(document.body, 'rtl');
//       this.renderer.setAttribute(document.body, 'dir', 'ltr');
//       this.currentLanguage.next(this.language);
//     }
//   }

//   private saveLanguageToStorage(lang: string) {
//     if (typeof window !== 'undefined' && localStorage) {
//       localStorage.setItem('currentLang', lang);
//     }
//   }

//   private getLanguageFromStorage(): string | null {
//     if (typeof window !== 'undefined' && localStorage) {
//       return localStorage.getItem('currentLang');
//     }
//     return null;
//   }
// }
