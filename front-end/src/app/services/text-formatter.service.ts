import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextFormatterService {

  getDescriptionParagraphs(text: string): string[] {
    return text.split('.').filter(sentence => sentence.trim().length > 0);
  }

  getCategoryNameParts(categoryName: string): string[] {
    const firstIndex = categoryName.indexOf('-');
    if (firstIndex !== -1) {
      return [
        categoryName.substring(0, firstIndex).trim(),
        categoryName.substring(firstIndex + 1).trim()
      ];
    }
    return [categoryName];
  }
}
