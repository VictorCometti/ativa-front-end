import { Component } from '@angular/core';
import { SearchFormComponent } from "../search-form/search-form.component";

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {

}
