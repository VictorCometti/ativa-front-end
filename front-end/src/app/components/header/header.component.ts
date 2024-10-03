import { Component, input } from '@angular/core';
import { HeaderOptionsComponent } from "../header-options/header-options.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderOptionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {
  public headerIcon = input<string>('./logo-sem-escrita.png');
  public isProductPage = input.required<boolean>();

}
