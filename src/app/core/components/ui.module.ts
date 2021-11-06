import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CircularProgressBarComponent } from './circular-progress-bar/circular-progress-bar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '@core/directives';

@NgModule({
    declarations: [
        HeaderComponent,
        ProgressBarComponent,
        CircularProgressBarComponent,
        AccordionComponent,
        AccordionHeader,
        AccordionItem,
        AccordionTitle,
        AccordionContent,
    ],
    imports: [CommonModule],
    exports: [
        HeaderComponent,
        ProgressBarComponent,
        CircularProgressBarComponent,
        AccordionComponent,
        AccordionHeader,
        AccordionItem,
        AccordionTitle,
        AccordionContent,
    ],
})
export class UIModule {}
