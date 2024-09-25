import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-content',
  standalone: true,
  imports: [],
  templateUrl: './initial-content.component.html',
  styleUrl: './initial-content.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }), // posição inicial
        animate('0.6s ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // animação de entrada
      ])
    ]),
    trigger('slideInDelay', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInButton', [
      state('hidden', style({
        transform: 'translateX(100%)',
        opacity: 0,
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('hidden => visible', [
        animate('1s ease-out')
      ]),
    ]),
    trigger('hoverGrow', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('grow', style({
        transform: 'scale(1.01)',
        boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.2)'
      })),
      transition('normal <=> grow', [
        animate('0.1s ease-in-out')
      ])
    ])
  ]

})
export class InitialContentComponent {
  buttonState = 'hidden';
  hoverState = 'normal';

  ngOnInit(): void {
    setTimeout(() => {
      this.buttonState = 'visible';
    }, 300);
  }

  onMouseEnter() {
    this.hoverState = 'grow';
  }

  onMouseLeave() {
    this.hoverState = 'normal';
  }
}
