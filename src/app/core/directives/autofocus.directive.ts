import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[empAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }
}
