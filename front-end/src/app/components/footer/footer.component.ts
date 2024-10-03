import { Component, inject, input } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { AnnounceButtonComponent } from "../announce-button/announce-button.component";
import { AnnounceComponent } from "../announce/announce.component";
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WhatsappButtonComponent, AnnounceButtonComponent, AnnounceComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  
})

export class FooterComponent {
  public isHomePage = input<boolean>(true);
  protected scrollService = inject(ScrollService);


  protected navigateToBudget(){
    this.scrollService.scrollToSection('budget-section');
  }

  protected navigateToClient(){
    this.scrollService.scrollToSection('client-section');
  }

  protected navigateToProducts(){
    this.scrollService.scrollToSection('product-section');
  }

  protected openWhatsapp(): void {
    const phoneNumber = ' 7133571515';
    const message: string = 'Olá, gostaria de solicitar um orçamento com vocês!'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank');
  }
  
}
