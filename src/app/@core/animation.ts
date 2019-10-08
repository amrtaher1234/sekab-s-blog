import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            query(
                ':enter',
                [style({ opacity: 0, position: 'absolute', width: '100%' })],
                { optional: true }
            ),
            query(
                ':leave',
                [style({ opacity: 1, position: 'absolute', width: '100%' }), animate('0.3s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0, position: 'absolute', width: '100%' }), animate('0.3s', style({ opacity: 1 }))],
                { optional: true }
            )
        ])
    ]);
