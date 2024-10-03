import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, take } from 'rxjs';
import { Category } from '../models/category-entity';
import { ApiCategoryResponse, CategoryResponse } from '../models/category-response';
import { CategoryMapperService } from './category-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {
  private httpClient = inject(HttpClient);

  private categoryMapperService = inject(CategoryMapperService);

  private baseUrl = '/api/product_category';

  public searchAllCategories(): Observable<{ categories: Category[], pagination: { totalPages: number; number: number } }> {
    return this.httpClient.get<ApiCategoryResponse>(`${this.baseUrl}`)
      .pipe(
        take(1), 
        map(response => ({
          categories: response.content.map((category: CategoryResponse) => 
            this.categoryMapperService.mapCategoryResponseToEntity(category)
          ),
          pagination: {
            totalPages: response.page.totalPages,
            number: response.page.number,
          }
        })),
        catchError(error => {
          console.error(`Ocorreu um erro ao tentar buscar as categorias: ${error.message}`, error);
          return of({ categories: [], pagination: { totalPages: 0, number: 0 } });
        })
      );
  }

  public searchCategoryByName(categoryName: string): Observable<Category> {
    return this.httpClient.get<CategoryResponse>(`${this.baseUrl}/${categoryName}`).pipe(
      take(1),
      map(response => ({
        categoryName: response.category_name, 
        imageUrl: response.image_url
      })),
      catchError(error => {
        console.error(`Ocorreu um erro ao tentar buscar a categoria: ${error.message}`, error);
        return of({ categoryName: '', imageUrl: '' });
      })
    );
  }
}