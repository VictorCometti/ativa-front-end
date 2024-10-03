import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-client-item',
  standalone: true,
  imports: [],
  templateUrl: './client-item.component.html',
  styleUrl: './client-item.component.scss',
  animations: [
    trigger('slideInFromRight', [
      state('hidden', style({
        transform: 'translateX(100%)',
        opacity: 0,
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('hidden => visible', [
        animate('500ms ease-out') 
      ])
    ])
  ]

})
export class ClientItemComponent {
  public clienteImage = input.required<string>();
  protected isVisible = false;
  protected isHovered = false;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.observeElement();
  }
  

  observeElement() {
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

  protected onMouseEnter() {
    this.isHovered = true;
  }

  protected onMouseLeave() {
    this.isHovered = false;
  }
}
