import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { ScrollService } from '../../services/scroll.service';
import { menuOptions, productMenu } from './menu-options';

@Component({
  selector: 'app-header-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-options.component.html',
  styleUrl: './header-options.component.scss',
})
export class HeaderOptionsComponent {
  protected menuOptions = menuOptions;
  public isProductPage = input.required<boolean>();
  protected productOptions = productMenu;
  protected navigateService = inject(NavigateService);
  protected scrollService = inject(ScrollService);
}
