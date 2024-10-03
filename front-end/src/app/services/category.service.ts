import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Category } from '../models/category-entity';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryList = new BehaviorSubject<{ categories: Category[]; pagination: { totalPages: number, number: number } }>({
    categories: [],
    pagination: { totalPages: 0, number: 0 },
  });

  private categoryToForm = new Subject<{ category: Category }>();

  public categoryToForm$ = this.categoryToForm.asObservable();

  public categoryList$ = this.categoryList.asObservable();

  public loadCategories(categories: { categories: Category[]; pagination: { totalPages: number, number: number } }) {
    this.categoryList.next(categories);
  }

  public loadCategoryToForm(category: Category) {
    this.categoryToForm.next({ category: category });
  }

}
