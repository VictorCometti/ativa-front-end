import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientItemComponent } from "../client-item/client-item.component";
import { DownButtonComponent } from "../down-button/down-button.component";
import { clients } from './clientes';

@Component({
  selector: 'app-cliente-section',
  standalone: true,
  imports: [ClientItemComponent, CommonModule, DownButtonComponent],
  templateUrl: './cliente-section.component.html',
  styleUrl: './cliente-section.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})

export class ClienteSectionComponent {
  public amplavisaoClients = clients;
}
