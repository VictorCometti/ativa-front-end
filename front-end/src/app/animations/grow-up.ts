import { animate, state, style, transition, trigger } from "@angular/animations";

export const growUpAnimation = trigger('growUp', [
    state('normal', style({
        transform: 'scale(1)',
    })),
    state('hover', style({
        transform: 'scale(1.1)',
    })),
    transition('normal <=> hover', animate('300ms ease'))
]);