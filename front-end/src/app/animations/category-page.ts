import { animate, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const itemAnimation = trigger('itemAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);
