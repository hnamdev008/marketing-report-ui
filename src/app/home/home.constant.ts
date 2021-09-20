export enum PriorityEnum {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export const ACCESSIBILY_DATA = [
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Each label associated with an input element contains text.',
        },
        domain: {
            percent: 50,
        },
        pages: {
            value: 4,
        },
        detail: {
            totalPage: 173,
            percent: 97.74,
            items: [
                {
                    name: 'Contact Monsido',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: true,
                    priority: 'low',
                },
                {
                    name: 'Monsido’s Partner Programs',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: false,
                    priority: 'low',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: false,
                    priority: 'high',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: false,
                    priority: 'medium',
                },
            ],
        },
    },
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Each input element has only one associated label',
        },
        domain: {
            percent: 92,
        },
        pages: {
            value: 1,
        },
        detail: {
            totalPage: 173,
            percent: 92.32,
            items: [
                {
                    name: 'Contact Monsido',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: true,
                    priority: 'medium',
                },
            ],
        },
    },
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Data tables that contain both row and column headers use the scope attribute to identify cells.',
        },
        domain: {
            percent: 96,
        },
        pages: {
            value: 4,
        },
        detail: {
            totalPage: 173,
            percent: 96.14,
            items: [
                {
                    name: 'Contact Monsido',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: true,
                    priority: 'high',
                },
                {
                    name: 'Monsido’s Partner Programs',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: false,
                    priority: 'medium',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: false,
                    priority: 'low',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',
                    moreFunc: false,
                    priority: 'high',
                },
            ],
        },
    },
];
