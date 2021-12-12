import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemingService } from 'src/app/services/theming/theming.service';

@Component({
  selector: 'app-style-manager',
  templateUrl: './style-manager.component.html',
  styleUrls: ['./style-manager.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class StyleManagerComponent implements OnInit {
  visibleSidebar: boolean = false;
  constructor(private themeService: ThemingService) {}

  ngOnInit(): void {
    this.themeService.getCurrentTheme();
  }

  sideBarStatus() {
    this.visibleSidebar = !this.visibleSidebar;
  }

  hideVisibleSidebar() {
    this.visibleSidebar = false;
  }
}
