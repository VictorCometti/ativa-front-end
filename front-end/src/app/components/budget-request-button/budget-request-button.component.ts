import { Component } from '@angular/core';
import { growUpAnimation } from '../../animations/grow-up';

@Component({
  selector: 'app-budget-request-button',
  standalone: true,
  imports: [],
  templateUrl: './budget-request-button.component.html',
  styleUrl: './budget-request-button.component.scss',
  animations: [
    growUpAnimation
  ]
})
export class BudgetRequestButtonComponent {
  protected state: string = 'normal';


}
