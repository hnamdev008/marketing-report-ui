import { Component, Input, OnInit } from '@angular/core';
import { C_DANGER, C_WARNING, C_SUCCESS } from '@core/colors.constant';

@Component({
    selector: 'app-circular-progress-bar',
    templateUrl: './circular-progress-bar.component.html',
    styleUrls: ['./circular-progress-bar.component.scss'],
})
export class CircularProgressBarComponent implements OnInit {
    @Input() value!: number;

    roundedValue!: number;
    backgroundColor!: string;

    constructor() {}

    ngOnInit(): void {
        this.roundedValue = Math.round(this.value / 10) * 10;

        if (this.value <= 50) {
            this.backgroundColor = C_DANGER;
        }

        if (50 < this.value && this.value <= 90) {
            this.backgroundColor = C_WARNING;
        }

        if (this.value > 90) {
            this.backgroundColor = C_SUCCESS;
        }
    }
}
