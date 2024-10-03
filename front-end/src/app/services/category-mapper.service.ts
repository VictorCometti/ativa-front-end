import { Injectable } from '@angular/core';
import { Category } from '../models/category-entity';
import { CategoryResponse } from '../models/category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryMapperService {

  public mapCategoryResponseToEntity(category: CategoryResponse): Category {
    return {
      categoryName: category.category_name,
      imageUrl: category.image_url
    };
  }
}
