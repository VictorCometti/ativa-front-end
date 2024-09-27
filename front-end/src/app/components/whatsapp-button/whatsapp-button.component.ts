import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
  animations: [
    trigger('growUp', [
      state('normal', style({
        transform: 'scale(1)',
      })),
      state('hover', style({
        transform: 'scale(1.1)',
      })),
      transition('normal <=> hover', animate('300ms ease'))
    ])
  ]
})
export class WhatsappButtonComponent {
  state: string = 'normal';

  protected openWhatsapp(): void {
    const phoneNumber = ' 7133571515';

    const message: string = 'Olá, gostaria de solicitar um orçamento com vocês!'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank');
  }

}
