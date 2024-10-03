import { Component, inject } from '@angular/core';
import { slideInAnimationItem, slideInDelayAnimation } from '../../animations/slide-in';
import { ScrollService } from '../../services/scroll.service';
import { DownButtonComponent } from "../down-button/down-button.component";

@Component({
  selector: 'app-initial-content',
  standalone: true,
  imports: [DownButtonComponent],
  templateUrl: './initial-content.component.html',
  styleUrl: './initial-content.component.scss',
  animations: [
    slideInAnimationItem,
    slideInDelayAnimation
  ]
})
export class InitialContentComponent {
  protected scrollService = inject(ScrollService);

}
