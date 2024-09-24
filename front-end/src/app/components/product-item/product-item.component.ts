import { Component, input } from '@angular/core';
import { ItemButtonComponent } from "../item-button/item-button.component";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ItemButtonComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  protected infoButton = "Sobre"
  protected budgetButton = "Adicionar"
  public imageUrl = input.required<string>();
  public model = input.required<string>();
  public description = input.required<string>();

}
