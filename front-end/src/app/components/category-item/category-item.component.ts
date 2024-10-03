import { Component, input, output } from '@angular/core';
import { Category } from '../../models/category-entity';
import { ItemButtonComponent } from "../item-button/item-button.component";

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [ItemButtonComponent],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
})
export class CategoryItemComponent {
  protected buttonName = "Saiba mais"
  public category = input.required<Category>();
  public categoryOutPut = output<Category>();
  protected aboutItem() {
    this.categoryOutPut.emit(this.category());
  }


}
