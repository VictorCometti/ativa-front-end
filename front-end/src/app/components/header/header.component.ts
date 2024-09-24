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
  public headerIcon = input<string>('https://amplasiteimages.s3.sa-east-1.amazonaws.com/logo.png');

}
