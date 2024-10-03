import { Component, output } from '@angular/core';
import { growUpAnimation } from '../../animations/grow-up';

@Component({
  selector: 'app-announce-button',
  standalone: true,
  imports: [],
  templateUrl: './announce-button.component.html',
  styleUrl: './announce-button.component.scss',
  animations: [
    growUpAnimation
  ]

})
export class AnnounceButtonComponent {
  protected state: string = 'normal';
  public click = output<void>();

  public onClick() {
    this.click.emit();
  }
}
