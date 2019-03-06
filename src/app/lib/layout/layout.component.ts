import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'core-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  drawerOpen = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}