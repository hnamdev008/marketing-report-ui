import { Component, Input, OnInit } from '@angular/core';
import { C_DANGER, C_SUCCESS, C_WARNING } from '@core/colors.constant';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
    @Input() progress!: number | string;
    @Input() leftText!: string;
    @Input() rightText!: string;
    @Input() bottomText = true;
    @Input() valueMax!: number;
    @Input() valueNow!: number;
    @Input() label!: string;
    @Input() totalPage!: number;
    @Input() page!: number;

    backgroundColor!: string;

    constructor() {}

    ngOnInit(): void {
        this.progress = `width: ${this.valueNow}%`;

        if (this.valueNow <= 50) {
            this.backgroundColor = C_DANGER;
        }

        if (50 < this.valueNow && this.valueNow <= 90 ) {
            this.backgroundColor = C_WARNING;
        }

        if (this.valueNow > 90) {
            this.backgroundColor = C_SUCCESS;
        }
    }
}
