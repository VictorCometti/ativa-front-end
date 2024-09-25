import { Component, input } from '@angular/core';

@Component({
  selector: 'app-invalid-feedback',
  standalone: true,
  imports: [],
  templateUrl: './invalid-feedback.component.html',
  styleUrl: './invalid-feedback.component.scss'
})
export class InvalidFeedbackComponent {
  public validationMessage = input<string>();

}
