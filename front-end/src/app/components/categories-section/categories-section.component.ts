import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { itemAnimation, slideInAnimation } from '../../animations/item';
import { Category } from '../../models/category-entity';
import { CategoryService } from '../../services/category.service';
import { CategoryItemComponent } from '../category-item/category-item.component';


@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule, CategoryItemComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss',
  animations: [
    itemAnimation,
    slideInAnimation
    
  ]
})

export class CategoriesSectionComponent implements OnInit {
  @ViewChild('carouselItems', { static: false }) carouselItems!: ElementRef;
  @ViewChild('section', { static: false }) section!: ElementRef;
  protected currentIndex: number = 0;
  protected itemsPerPage: number = 5;
  protected totalItems: number = 0;
  protected itemWidth: number = 0;
  protected isVisible = false;
  protected categories: Category[] = [];
  protected displayedCategories: Category[] = [];
  private subscription = new Subscription();
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private elementRef = inject(ElementRef);


  ngOnInit() {
    this.observeElement();
    this.setItemsPerPage();
    this.subscription = this.categoryService.categoryList$.pipe(
      tap(response => {
        this.categories = response.categories;
        this.totalItems = this.categories.length;
        this.currentIndex = 0;
        this.updateDisplayedCategories();
      })
    ).subscribe(() => {
      this.changeDetectorRef.detectChanges();
      this.calculateItemWidth();
    });

    window.addEventListener('resize', this.onResize.bind(this));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    window.removeEventListener('resize', this.onResize.bind(this));
  }
  
  ngAfterViewInit() {
    this.calculateItemWidth();
  }

  private setItemsPerPage(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      this.itemsPerPage = 2;
    } else if (screenWidth <= 1024) {
      this.itemsPerPage = 4;
    } else if (screenWidth >= 1366) {
      this.itemsPerPage = 5;
    }
  }

  private onResize(): void {
    this.setItemsPerPage();
    this.updateDisplayedCategories();
    this.calculateItemWidth();
    this.scrollToCurrentIndex();
  }

  private updateDisplayedCategories(): void {
    this.displayedCategories = this.categories.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  protected goPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex = Math.max(this.currentIndex - this.itemsPerPage, 0);
      this.updateDisplayedCategories();
      this.scrollToCurrentIndex();
    }
  }

  protected goNext() {
    if (this.currentIndex + this.itemsPerPage < this.totalItems) {
      this.currentIndex = Math.min(this.currentIndex + this.itemsPerPage, this.totalItems - this.itemsPerPage);
      this.updateDisplayedCategories();
      this.scrollToCurrentIndex();
    }
  }


  private scrollToCurrentIndex() {
    const newScrollPosition = this.itemWidth * this.currentIndex;
    console.log("Scrolling to position:", newScrollPosition);
    this.carouselItems.nativeElement.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  }

 

  protected openCategory(category: Category) {
    let url = `/product_category/${category.categoryName}`;
    this.router.navigateByUrl(url).then(() => {
      window.scrollTo(0, 0);
    });
  }

  private calculateItemWidth(): void {
    if (this.carouselItems && this.carouselItems.nativeElement.children.length > 0) {
      this.itemWidth = this.carouselItems.nativeElement.offsetWidth / this.itemsPerPage;
    }
  }

  private observeElement() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }
}

