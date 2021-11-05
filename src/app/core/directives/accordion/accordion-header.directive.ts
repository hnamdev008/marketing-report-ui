import { Directive, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[accordionHeader]'
})
// tslint:disable-next-line:directive-class-suffix
export class AccordionHeader {
  constructor(public templateRef: TemplateRef<any>) {}
}
