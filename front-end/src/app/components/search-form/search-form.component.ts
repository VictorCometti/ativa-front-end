import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from "../search-input/search-input.component";

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SearchInputComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  protected formControlName = "productName";

  protected searchPlaceholder = 'Câmera..';

  protected searchLabel = "Pesquisar Produto";

  private formBuilderService = inject(FormBuilder);

  protected form = this.formBuilderService.group({
    productName:[''],
  })
}
