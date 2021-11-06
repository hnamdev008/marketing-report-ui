import { ContentChild, Directive, Input } from '@angular/core';
import { AccordionContent } from './accordion-content.directive';
import { AccordionHeader } from './accordion-header.directive';
import { AccordionTitle } from './accordion-title.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'accordion-item'
})
// tslint:disable-next-line:directive-class-suffix
export class AccordionItem {
  @Input() title = '';
  @Input() disabled = false;
  @ContentChild(AccordionContent) content!: AccordionContent;
  @ContentChild(AccordionTitle) customTitle!: AccordionTitle;
  @ContentChild(AccordionHeader) customHeader!: AccordionHeader;
}
