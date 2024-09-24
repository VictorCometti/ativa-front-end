import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class ProductsSectionComponent {
  private changeDector = inject(ChangeDetectorRef);

  private productsList = [
    { id:1, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:2, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:3, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:4, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:5, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:6, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:7, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:8, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:9, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:10, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:11, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    },
    { id:12, 
      model:"CAE-500 XMAX4", 
      description:"CENTRAL DE ALARME DE INCÊNDIO ENDEREÇÁVEL",
      image:"./product-image.png"
    }
  ];


  protected visibleProducts: any[] = [];
  
  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productsList.forEach((product, index) => {
      setTimeout(() => {
        this.visibleProducts.push(product);
        this.changeDector.detectChanges();
      }, index * 150);
    });
  }
}
