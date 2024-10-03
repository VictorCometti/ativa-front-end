import { Component, output } from '@angular/core';
import { AnnounceButtonComponent } from "../announce-button/announce-button.component";
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-announce',
  standalone: true,
  imports: [WhatsappButtonComponent, AnnounceButtonComponent],
  templateUrl: './announce.component.html',
  styleUrl: './announce.component.scss'
})
export class AnnounceComponent {
  isClicked = output<void>();

  public clicked(){
    this.isClicked.emit()
  }
}
