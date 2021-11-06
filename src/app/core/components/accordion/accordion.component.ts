import { trigger, state, style, transition, animate } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { AccordionItem } from '../../directives/accordion';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({height: '*', opacity: 1, visibility: 'visible'})),
      state('collapsed', style({height: '0px', opacity: 0, visibility: 'hidden'})),
      transition('expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ]
})
export class AccordionComponent {
  expanded = new Set<number>();
  /**
   * Decides if the single item will be open at once or not.
   * In collapsing mode, toggling one would collapse others
   */
  @Input() collapsing = true;
  @Output() indexChange = new EventEmitter<number | null>();

  @ContentChildren(AccordionItem) items!: QueryList<AccordionItem>;

  /**
   * Make the toggle function available to be called from
   * outside.
   * @param index - index of the accordion item
   */
  getToggleState = (index: number) => {
    return this.toggleState.bind(this, index);
  }

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);

      this.indexChange.emit(null);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);

      this.indexChange.emit(index);
    }

  }
}
