import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-item-button',
  standalone: true,
  imports: [],
  templateUrl: './item-button.component.html',
  styleUrl: './item-button.component.scss'
})
export class ItemButtonComponent {
  public click = output<void>();
  public buttonName = input.required<string>();

  protected buttonClick() {
    this.click.emit();
  }
}
