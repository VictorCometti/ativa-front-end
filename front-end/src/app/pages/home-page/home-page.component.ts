import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetSectionComponent } from '../../components/budget-section/budget-section.component';
import { CategoriesSectionComponent } from "../../components/categories-section/categories-section.component";
import { ClienteSectionComponent } from "../../components/cliente-section/cliente-section.component";
import { DivisorComponent } from "../../components/divisor/divisor.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { InitialContentComponent } from "../../components/initial-content/initial-content.component";
import { ApiCategoryService } from '../../services/api-category.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CategoriesSectionComponent, InitialContentComponent, DivisorComponent, FooterComponent, ClienteSectionComponent, BudgetSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private apiCategoryService = inject(ApiCategoryService);

  private subscription = new Subscription;

  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.subscription = this.apiCategoryService.searchAllCategories()
      .subscribe(response => {
        this.categoryService.loadCategories({
          categories: response.categories,
          pagination: {
            totalPages: response.pagination.totalPages,
            number: response.pagination.number
          }
        });
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}