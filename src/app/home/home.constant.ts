export enum PriorityEnum {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export const ACCESSIBILY_DATA = [
    {
        level: {
            icon: './assets/icons/accessibily.svg',
            text: 'Each label associated with an input element contains text.',
            compliance: 70,
            page: 4,
            detail: {
                totalPage: 173,
                percent: 97.74,
                items: [
                    {
                        name: 'Contact Monsido',
                        url: 'https://www.monsido.com/contact',
                        priority: 'low',
                    },
                    {
                        name: 'Monsido’s Partner Programs',
                        url: 'https://www.monsido.com/contact',
                        priority: 'low',
                    },
                    {
                        name: 'Lorem Ipsum',
                        url: 'https://www.monsido.com/contact',

                        priority: 'high',
                    },
                    {
                        name: 'Lorem Ipsum',
                        url: 'https://www.monsido.com/contact',

                        priority: 'medium',
                    },
                ],
            },
        },
        domain: {
            percent: 70,
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
                    priority: 'low',
                },
                {
                    name: 'Monsido’s Partner Programs',
                    url: 'https://www.monsido.com/contact',
                    priority: 'low',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',

                    priority: 'high',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',

                    priority: 'medium',
                },
            ],
        },
    },
    {
        level: {
            icon: './assets/icons/accessibily.svg',
            text: 'Each label associated with an input element contains text.',
            compliance: 90,
            page: 4,
            detail: {
                totalPage: 173,
                percent: 97.74,
                items: [
                    {
                        name: 'Contact Monsido',
                        url: 'https://www.monsido.com/contact',
                        priority: 'low',
                    },
                    {
                        name: 'Monsido’s Partner Programs',
                        url: 'https://www.monsido.com/contact',
                        priority: 'low',
                    },
                    {
                        name: 'Lorem Ipsum',
                        url: 'https://www.monsido.com/contact',

                        priority: 'high',
                    },
                    {
                        name: 'Lorem Ipsum',
                        url: 'https://www.monsido.com/contact',

                        priority: 'medium',
                    },
                ],
            },
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
                    priority: 'low',
                },
                {
                    name: 'Monsido’s Partner Programs',
                    url: 'https://www.monsido.com/contact',
                    priority: 'low',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',

                    priority: 'high',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',

                    priority: 'medium',
                },
            ],
        },
    },
    {
        level: {
            icon: './assets/icons/accessibily.svg',
            text: 'Each label associated with an input element contains text.',
            compliance: 93,
            page: 4,
            detail: {
                totalPage: 173,
                percent: 97.74,
                items: [
                    {
                        name: 'Contact Monsido',
                        url: 'https://www.monsido.com/contact',
                        priority: 'low',
                    },
                    {
                        name: 'Monsido’s Partner Programs',
                        url: 'https://www.monsido.com/contact',
                        priority: 'low',
                    },
                    {
                        name: 'Lorem Ipsum',
                        url: 'https://www.monsido.com/contact',

                        priority: 'high',
                    },
                    {
                        name: 'Lorem Ipsum',
                        url: 'https://www.monsido.com/contact',

                        priority: 'medium',
                    },
                ],
            },
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
                    priority: 'low',
                },
                {
                    name: 'Monsido’s Partner Programs',
                    url: 'https://www.monsido.com/contact',
                    priority: 'low',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',

                    priority: 'high',
                },
                {
                    name: 'Lorem Ipsum',
                    url: 'https://www.monsido.com/contact',

                    priority: 'medium',
                },
            ],
        },
    },
];

export const QA_DATA = [
    {
        level: {
            icon: './assets/icons/hyperlink.svg',
            text: 'Broken Links',
            issues: 1,
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        url: 'https://www.monsido.com/contact',
                        pages: 1,
                    },
                ],
            },
        },
    },
    {
        level: {
            icon: './assets/icons/images.svg',
            text: 'Broken Images',
            issues: 4,
            compliance: 43,
            pages: 7,
            detail: {
                items: [
                    {
                        url: 'https://www.monsido.com/contact',
                        pages: 1,
                    },
                ],
            },
        },
    },
    {
        level: {
            icon: './assets/icons/misspellings.svg',
            text: 'Misspellings',
            issues: 2,
            compliance: 75,
            pages: 5,
            detail: {
                items: [
                    {
                        url: 'https://www.monsido.com/contact',
                        pages: 1,
                    },
                ],
            },
        },
    }
];

export const SEO_DATA = [
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Images missing ALT text',
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        image: './assets/images/example.png',
                        path: 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg',
                        pages: 1,
                    },
                ],
            },
        },
    },
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Too long META description',
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        image: './assets/images/example.png',
                        path: 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg',
                        pages: 1,
                    },
                ],
            },
        },
    },
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'H1 found on more than one page',
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        image: './assets/images/example.png',
                        path: 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg',
                        pages: 1,
                    },
                ],
            },
        },
    }
];

export const PRIVACY_DATA = [
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Street addresses and landmarks',
            severity: PriorityEnum.medium,
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        issue: 'Frederikssundsvej 3',
                        pages: 1,
                    },
                    {
                        issue: 'High Street',
                        pages: 7,
                    },
                    {
                        issue: 'Boulder Hill',
                        pages: 1,
                    },
                ],
            },
        },
    },
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Date of birth',
            severity: PriorityEnum.high,
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        issue: 'Frederikssundsvej 3',
                        pages: 1,
                    },
                    {
                        issue: 'High Street',
                        pages: 7,
                    },
                    {
                        issue: 'Boulder Hill',
                        pages: 1,
                    },
                ],
            },
        },
    },
    {
        level: {
            icon: './assets/icons/warning.svg',
            text: 'Email address',
            severity: PriorityEnum.low,
            compliance: 67,
            pages: 1,
            detail: {
                items: [
                    {
                        issue: 'Frederikssundsvej 3',
                        pages: 1,
                    },
                    {
                        issue: 'High Street',
                        pages: 7,
                    },
                    {
                        issue: 'Boulder Hill',
                        pages: 1,
                    },
                ],
            },
        },
    },
];
