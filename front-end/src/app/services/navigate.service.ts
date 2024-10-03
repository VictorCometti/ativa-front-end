import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  protected router = inject(Router);

  public navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
