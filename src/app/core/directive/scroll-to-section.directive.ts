import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToSection]',
  standalone: true
})
export class ScrollToSectionDirective {

  constructor() { }
  @Input('scrollToSection') targetId!: string;

  @HostListener('click')
  scrollToTarget(): void {
    if (this.targetId) {
      const targetElement = document.getElementById(this.targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

}
