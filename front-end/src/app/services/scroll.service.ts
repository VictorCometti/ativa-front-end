import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private viewportScroller = inject(ViewportScroller);

  public scrollToSection(anchor:string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
