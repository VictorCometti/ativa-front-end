import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('HomePageComponent => CategoryPageComponent', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':leave', [
                animate('600ms ease', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('600ms ease', style({ transform: 'translateX(0)' }))
            ], { optional: true })
        ])
    ]),

    transition('CategoryPageComponent => HomePageComponent', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':leave', [
                animate('600ms ease', style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('600ms ease', style({ transform: 'translateX(0)' }))
            ], { optional: true })
        ])
    ]),

]);
