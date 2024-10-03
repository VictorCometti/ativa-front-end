import { animate, style, transition, trigger } from '@angular/animations';

export const itemAnimation = trigger('itemAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100%) scale(0.8)', filter: 'drop-shadow(0 2px 2px #555)' }),
    animate('300ms 200ms ease-out', style({ opacity: 1, transform: 'translateX(0) scale(1)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%) scale(0.9)', filter: 'drop-shadow(0 2px 2px #555)' })),
  ]),
]);

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
  ]),
]);
