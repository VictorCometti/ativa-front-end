import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NavItemsComponent } from "../../components/nav-items/nav-items.component";
import { ProductsSectionComponent } from "../../components/products-section/products-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, NavItemsComponent, ProductsSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
