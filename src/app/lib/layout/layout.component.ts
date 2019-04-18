import {Component} from '@angular/core';
import {StorageService} from "../storage/storage.service";

@Component({
  selector: 'core-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  navOpen: boolean;
  processInfosOpen: boolean;

  constructor(private storage: StorageService) {

    this.navOpen = storage.getBoolean('navbarOpen');
    this.processInfosOpen = storage.getBoolean('processInfosOpen');

  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.storage.setBoolean('navbarOpen', this.navOpen);
  }

  toggleProcessInfos() {
    this.processInfosOpen = !this.processInfosOpen;
    this.storage.setBoolean('processInfosOpen', this.processInfosOpen);
  }
}
