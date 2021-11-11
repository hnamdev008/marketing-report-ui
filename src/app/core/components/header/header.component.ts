import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    bookDemo(): void {
        window.open(
            'https://go.monsido.com/demo?utm_source=report-page&utm_medium=sticky-bar-cta&utm_content=book-a-demo&utm_campaign=snapshot-report-flow',
            '_blank'
        );
    }
}
