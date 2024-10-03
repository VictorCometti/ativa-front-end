import { animate, style, transition, trigger } from "@angular/animations";

export const slideInAnimationItem = trigger('slideIn', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);

export const slideInDelayAnimation = trigger('slideInDelay', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);