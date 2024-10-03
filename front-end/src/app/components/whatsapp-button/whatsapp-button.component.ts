import { Component } from '@angular/core';
import { growUpAnimation } from '../../animations/grow-up';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
  animations: [
    growUpAnimation
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
