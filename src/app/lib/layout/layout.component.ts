import {Component} from '@angular/core';

@Component({
  selector: 'core-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  navOpen = !!localStorage.getItem('navbarOpen') || true;
  processInfosOpen = !!localStorage.getItem('processInfosOpen') || false;

  toggleNav() {
    this.navOpen = !this.navOpen;
    localStorage.setItem('navbarOpen', this.navOpen + '');
  }

  toggleProcessInfos() {
    this.processInfosOpen = !this.processInfosOpen;
    localStorage.setItem('processInfosOpen', this.processInfosOpen + '');
  }
}
