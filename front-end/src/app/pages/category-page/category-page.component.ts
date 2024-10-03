import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { itemAnimation, slideInAnimation } from '../../animations/category-page';
import { AnnounceButtonComponent } from "../../components/announce-button/announce-button.component";
import { BudgetFormComponent } from "../../components/budget-form/budget-form.component";
import { BudgetRequestButtonComponent } from "../../components/budget-request-button/budget-request-button.component";
import { BudgetSectionComponent } from "../../components/budget-section/budget-section.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { SectionNavComponent } from "../../components/section-nav/section-nav.component";
import { WhatsappButtonComponent } from "../../components/whatsapp-button/whatsapp-button.component";
import { Category } from '../../models/category-entity';
import { ApiCategoryService } from '../../services/api-category.service';
import { CategoryService } from '../../services/category.service';
import { ScrollService } from '../../services/scroll.service';
import { TextFormatterService } from '../../services/text-formatter.service';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [HeaderComponent, WhatsappButtonComponent, CommonModule, AnnounceButtonComponent, BudgetRequestButtonComponent, SectionNavComponent, BudgetFormComponent, BudgetSectionComponent, FooterComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
  animations: [
    slideInAnimation,
    itemAnimation
  ]
})
export class CategoryPageComponent implements OnInit {
  private subscription = new Subscription();
  private route = inject(ActivatedRoute);
  protected category: Category = {categoryName: '', imageUrl: '' };
  protected scrollService = inject(ScrollService);
  private apiCategoryService = inject(ApiCategoryService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  protected textFormatter = inject(TextFormatterService);
  protected sections: HTMLElement[] = [];

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
    this.subscription = this.route.paramMap.subscribe(params => {
      const categoryName = params.get('category');
      if (categoryName) {
        this.searchCategoryByName(categoryName);
      }
    });
  }

  protected navigateToSection() {
    this.router.navigate(['']);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private searchCategoryByName(categoryName: string | null) {
    if (categoryName === '') {
      return;
    }

    if (categoryName) {
      this.subscription = this.apiCategoryService.searchCategoryByName(categoryName)
      .subscribe({
        next: (category: Category) => {
          this.categoryService.loadCategoryToForm(category);
          this.category = category;
        },
        error: (error: HttpErrorResponse) => {
          console.error(`Ocorreu um erro ao tentar buscar as categorias: ${error.message}`, error);
          this.category = {categoryName: '', imageUrl: '' };
        }
      });
    }
  }
}
