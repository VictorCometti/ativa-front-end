import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetFormComponent } from "../budget-form/budget-form.component";
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-budget-section',
  standalone: true,
  imports: [BudgetFormComponent, WhatsappButtonComponent],
  templateUrl: './budget-section.component.html',
  styleUrls: ['./budget-section.component.scss']
})
export class BudgetSectionComponent {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
