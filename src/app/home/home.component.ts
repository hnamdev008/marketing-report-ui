import { Component, HostListener, OnInit } from '@angular/core';
import { ACCESSIBILY_DATA, QA_DATA, PriorityEnum, SEO_DATA, PRIVACY_DATA } from './home.constant';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    readonly ACCESSIBILY_DATA = ACCESSIBILY_DATA;
    readonly QA_DATA = QA_DATA;
    readonly SEO_DATA = SEO_DATA;
    readonly PRIVACY_DATA = PRIVACY_DATA;
    readonly PriorityEnum = PriorityEnum;

    collapsing = true;
    currentRowIndex = 0;
    currentDetail: any;
    currentQADetail: any;
    currentSEODetail: any;
    currentPrivacyDetail: any;

    public innerWidth: any;

    constructor() {}

    ngOnInit(): void {
        this.currentDetail = ACCESSIBILY_DATA[0];
        this.currentQADetail = QA_DATA[0];
        this.currentSEODetail = SEO_DATA[0];
        this.currentPrivacyDetail = PRIVACY_DATA[0];

        this.innerWidth = window.innerWidth;
    }

    @HostListener('window:resize')
    onResize(): void {
        this.innerWidth = window.innerWidth;
    }

    onShowDetail(data: any, index: number): void {
        this.currentRowIndex = index;
        this.currentDetail = data;

        console.log(data, index);
    }

    toggle(data: any, index: number): void {
        this.currentRowIndex = index;
        this.currentDetail = data;

        console.log(data, index);
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

    changeIndex(index: any): void {
        console.log(index);
    }
}
