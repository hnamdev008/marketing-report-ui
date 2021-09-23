import { Component, HostListener, OnInit } from '@angular/core';
import { ACCESSIBILY_DATA, PriorityEnum } from './home.constant';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    readonly ACCESSIBILY_DATA = ACCESSIBILY_DATA;
    readonly PriorityEnum = PriorityEnum;

    currentRowIndex = 0;
    currentDetail: any;

    public innerWidth: any;

    constructor() {}

    ngOnInit(): void {
        this.currentDetail = ACCESSIBILY_DATA[0];
        this.innerWidth = window.innerWidth;
    }

    @HostListener('window:resize')
    onResize(): void {
        this.innerWidth = window.innerWidth;
    }

    onShowDetail(data: any, index: number): void {
        this.currentRowIndex = index;
        this.currentDetail = data;
    }

    getBoxColor(priority: PriorityEnum): string {
        switch (priority) {
            case PriorityEnum.low:
                return 'box--low';

            case PriorityEnum.medium:
                return 'box--medium';

            case PriorityEnum.high:
                return 'box--high';
        }
    }
}
