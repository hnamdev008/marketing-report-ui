import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CircularProgressBarComponent } from './circular-progress-bar/circular-progress-bar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ProgressBarComponent,
        CircularProgressBarComponent,
    ],
    imports: [CommonModule],
    exports: [
        HeaderComponent,
        ProgressBarComponent,
        CircularProgressBarComponent,
    ],
})
export class UIModule {}
