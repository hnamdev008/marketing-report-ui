import { Directive, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[accordionTitle]'
})
// tslint:disable-next-line:directive-class-suffix
export class AccordionTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}
