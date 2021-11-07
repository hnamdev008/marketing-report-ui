import { Directive, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[accordionContent]'
})
// tslint:disable-next-line:directive-class-suffix
export class AccordionContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
