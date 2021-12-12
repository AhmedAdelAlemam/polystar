import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/services/theming/theming.service';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.less'],
})
export class ThemeChangerComponent implements OnInit {
  constructor(private themeService: ThemingService) {}
  showOverlay: boolean = false;

  ngOnInit(): void {}

  overlayStatus() {
    this.showOverlay = true;
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000);
  }
  setBootstrapLightBlueTheme() {
    this.themeService.setBootstrapLightBlueTheme();
    this.overlayStatus();
  }
  setMdcDarkIndigoTheme() {
    this.themeService.setMdcDarkIndigoTheme();
    this.overlayStatus();
  }
  setAryaBlueTheme() {
    this.themeService.setAryaBlueTheme();
    this.overlayStatus();
  }
  setAryaGreenTheme() {
    this.themeService.setAryaGreenTheme();
    this.overlayStatus();
  }
  setAryaOrangeTheme() {
    this.themeService.setAryaOrangeTheme();
    this.overlayStatus();
  }
  setAryaPurpleTheme() {
    this.themeService.setAryaPurpleTheme();
    this.overlayStatus();
  }
  setBootstrapDarkBlueTheme() {
    this.themeService.setBootstrapDarkBlueTheme();
    this.overlayStatus();
  }
  setBootstrapDarkPurpleTheme() {
    this.themeService.setBootstrapDarkPurpleTheme();
    this.overlayStatus();
  }
  setBootstrapLightPurpleTheme() {
    this.themeService.setBootstrapLightPurpleTheme();
    this.overlayStatus();
  }
  setFluentLightTheme() {
    this.themeService.setFluentLightTheme();
    this.overlayStatus();
  }
  setLunaAmberTheme() {
    this.themeService.setLunaAmberTheme();
    this.overlayStatus();
  }
  setLunaBlueTheme() {
    this.themeService.setLunaBlueTheme();
    this.overlayStatus();
  }
  setLunaGreenTheme() {
    this.themeService.setLunaGreenTheme();
    this.overlayStatus();
  }
  setLunaPinkTheme() {
    this.themeService.setLunaPinkTheme();
    this.overlayStatus();
  }
  setMdDarkDeepPurpleTheme() {
    this.themeService.setMdDarkDeepPurpleTheme();
    this.overlayStatus();
  }
  setMdDarkIndigoTheme() {
    this.themeService.setMdDarkIndigoTheme();
    this.overlayStatus();
  }
  setMdLightDeepPurpleTheme() {
    this.themeService.setMdLightDeepPurpleTheme();
    this.overlayStatus();
  }
  setMdLightIndigoTheme() {
    this.themeService.setMdLightIndigoTheme();
    this.overlayStatus();
  }
  setMdcDarkDeepPurpleTheme() {
    this.themeService.setMdcDarkDeepPurpleTheme();
    this.overlayStatus();
  }
  setMdcLightDeepPurpleTheme() {
    this.themeService.setMdcLightDeepPurpleTheme();
    this.overlayStatus();
  }
  setMdcLightIndigoTheme() {
    this.themeService.setMdcLightIndigoTheme();
    this.overlayStatus();
  }
  setNovaTheme() {
    this.themeService.setNovaTheme();
    this.overlayStatus();
  }
  setNovaAccentTheme() {
    this.themeService.setNovaAccentTheme();
    this.overlayStatus();
  }
  setNovaAltTheme() {
    this.themeService.setNovaAltTheme();
    this.overlayStatus();
  }
  setRheaTheme() {
    this.themeService.setRheaTheme();
    this.overlayStatus();
  }
  setSagaBlueTheme() {
    this.themeService.setSagaBlueTheme();
    this.overlayStatus();
  }
  setSagaGreenTheme() {
    this.themeService.setSagaGreenTheme();
    this.overlayStatus();
  }
  setSagaOrangeTheme() {
    this.themeService.setSagaOrangeTheme();
    this.overlayStatus();
  }
  setSagaPurpleTheme() {
    this.themeService.setSagaPurpleTheme();
    this.overlayStatus();
  }
  setVelaBlueTheme() {
    this.themeService.setVelaBlueTheme();
    this.overlayStatus();
  }
  setVelaOrangeTheme() {
    this.themeService.setVelaOrangeTheme();
    this.overlayStatus();
  }
  setVelaGreenTheme() {
    this.themeService.setVelaGreenTheme();
    this.overlayStatus();
  }
  setVelaPurpleTheme() {
    this.themeService.setVelaPurpleTheme();
    this.overlayStatus();
  }
}
