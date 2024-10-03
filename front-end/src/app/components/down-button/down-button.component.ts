import { Component, inject, input } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-down-button',
  standalone: true,
  imports: [],
  templateUrl: './down-button.component.html',
  styleUrl: './down-button.component.scss'
})
export class DownButtonComponent {
  protected scrollService = inject(ScrollService);
  public downPage = input.required<string>();

}
