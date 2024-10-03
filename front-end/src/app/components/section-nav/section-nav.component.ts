import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-nav',
  standalone: true,
  imports: [],
  templateUrl: './section-nav.component.html',
  styleUrl: './section-nav.component.scss'
})
export class SectionNavComponent {
  protected navigateService = inject(Router);
}
