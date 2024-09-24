import { Component } from '@angular/core';
import { menuOptions } from './menu-options';

@Component({
  selector: 'app-header-options',
  standalone: true,
  imports: [],
  templateUrl: './header-options.component.html',
  styleUrl: './header-options.component.scss',
})
export class HeaderOptionsComponent {
  protected menuOptions = menuOptions;
}
