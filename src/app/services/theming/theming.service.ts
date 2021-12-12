import { Injectable } from '@angular/core';
import {
  Theme,
  bootstrapLightBlue,
  mdcDarkIndigo,
  aryaBlue,
  aryaGreen,
  aryaOrange,
  aryaPurple,
  bootstrapDarkBlue,
  bootstrapDarkPurple,
  bootstrapLightPurple,
  fluentLight,
  lunaAmber,
  lunaBlue,
  lunaGreen,
  lunaPink,
  mdDarkDeepPurple,
  mdDarkIndigo,
  mdLightDeepPurple,
  mdLightIndigo,
  mdcDarkDeepPurple,
  mdcLightDeepPurple,
  mdcLightIndigo,
  nova,
  novaAccent,
  novaAlt,
  rhea,
  sagaBlue,
  sagaGreen,
  sagaOrange,
  sagaPurple,
  velaBlue,
  velaOrange,
  velaGreen,
  velaPurple,
} from '../../models/theming/theming';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  private active: Theme = mdcDarkIndigo;
  private activeTheme = localStorage.getItem('ACTIVE_THEME');
  private appWrapper = document.getElementById('app-wrapper');
  private availableThemes: Theme[] = [
    bootstrapLightBlue,
    mdcDarkIndigo,
    aryaBlue,
    aryaGreen,
    aryaOrange,
    aryaPurple,
    bootstrapDarkBlue,
    bootstrapDarkPurple,
    bootstrapLightPurple,
    fluentLight,
    lunaAmber,
    lunaBlue,
    lunaGreen,
    lunaPink,
    mdDarkDeepPurple,
    mdDarkIndigo,
    mdLightDeepPurple,
    mdLightIndigo,
    mdcDarkDeepPurple,
    mdcLightDeepPurple,
    mdcLightIndigo,
    nova,
    novaAccent,
    novaAlt,
    rhea,
    sagaBlue,
    sagaGreen,
    sagaOrange,
    sagaPurple,
    velaBlue,
    velaOrange,
    velaGreen,
    velaPurple,
  ];
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getCurrentTheme() {
    switch (this.activeTheme) {
      case 'bootstrapLightBlue':
        this.setBootstrapLightBlueTheme();
        break;

      case 'mdcDarkIndigo':
        this.setMdcDarkIndigoTheme();
        break;

      case 'aryaBlue':
        this.setAryaBlueTheme();
        break;

      case 'aryaGreen':
        this.setAryaGreenTheme();
        break;

      case 'aryaOrange':
        this.setAryaOrangeTheme();
        break;

      case 'aryaPurple':
        this.setAryaBlueTheme();
        break;

      case 'bootstrapDarkBlue':
        this.setBootstrapDarkBlueTheme();
        break;

      case 'bootstrapDarkPurple':
        this.setBootstrapDarkPurpleTheme();
        break;

      case 'bootstrapLightPurple':
        this.setBootstrapLightPurpleTheme();
        break;

      case 'fluentLight':
        this.setFluentLightTheme();
        break;

      case 'lunaAmber':
        this.setLunaAmberTheme();
        break;

      case 'lunaBlue':
        this.setLunaBlueTheme();
        break;

      case 'lunaGreen':
        this.setLunaGreenTheme();
        break;

      case 'lunaPink':
        this.setLunaPinkTheme();
        break;

      case 'mdDarkDeepPurple':
        this.setMdDarkDeepPurpleTheme();
        break;

      case 'mdDarkIndigo':
        this.setMdDarkIndigoTheme();
        break;

      case 'mdLightDeepPurple':
        this.setMdLightDeepPurpleTheme();
        break;

      case 'mdLightIndigo':
        this.setMdLightIndigoTheme();
        break;

      case 'mdcDarkDeepPurple':
        this.setMdcDarkDeepPurpleTheme();
        break;

      case 'mdcLightDeepPurple':
        this.setMdcLightDeepPurpleTheme();
        break;

      case 'mdcLightIndigo':
        this.setMdcLightIndigoTheme();
        break;

      case 'nova':
        this.setNovaTheme;
        break;

      case 'novaAccent':
        this.setNovaAccentTheme();
        break;

      case 'novaAlt':
        this.setNovaAltTheme();
        break;

      case 'rhea':
        this.setRheaTheme();
        break;

      case 'sagaBlue':
        this.setSagaBlueTheme();
        break;

      case 'sagaGreen':
        this.setSagaGreenTheme();
        break;

      case 'sagaOrange':
        this.setSagaOrangeTheme();
        break;

      case 'sagaPurple':
        this.setSagaPurpleTheme();
        break;

      case 'velaBlue':
        this.setVelaBlueTheme();
        break;

      case 'velaOrange':
        this.setVelaOrangeTheme();
        break;

      case 'velaGreen':
        this.setVelaGreenTheme();
        break;

      case 'velaPurple':
        this.setVelaPurpleTheme();
        break;

      default:
        this.setMdcDarkIndigoTheme();
    }
  }
  // getActiveTheme(): Theme {
  //   return this.active;
  // }

  // isDarkTheme(): boolean {
  //   return this.active.name === mdcDarkIndigo.name;
  // }

  setMdcDarkIndigoTheme(): void {
    this.setActiveTheme(mdcDarkIndigo);
    localStorage.setItem('ACTIVE_THEME', 'mdcDarkIndigo');
  }
  setBootstrapLightBlueTheme(): void {
    this.setActiveTheme(bootstrapLightBlue);
    localStorage.setItem('ACTIVE_THEME', 'bootstrapLightBlue');
  }
  setAryaBlueTheme() {
    this.setActiveTheme(aryaBlue);
    localStorage.setItem('ACTIVE_THEME', 'aryaBlue');
  }
  setAryaGreenTheme() {
    this.setActiveTheme(aryaGreen);
    localStorage.setItem('ACTIVE_THEME', 'aryaGreen');
  }
  setAryaOrangeTheme() {
    this.setActiveTheme(aryaOrange);
    localStorage.setItem('ACTIVE_THEME', 'aryaOrange');
  }
  setAryaPurpleTheme() {
    this.setActiveTheme(aryaPurple);
    localStorage.setItem('ACTIVE_THEME', 'aryaPurple');
  }
  setBootstrapDarkBlueTheme() {
    this.setActiveTheme(bootstrapDarkBlue);
    localStorage.setItem('ACTIVE_THEME', 'bootstrapDarkBlue');
  }
  setBootstrapDarkPurpleTheme() {
    this.setActiveTheme(bootstrapDarkPurple);
    localStorage.setItem('ACTIVE_THEME', 'bootstrapDarkPurple');
  }
  setBootstrapLightPurpleTheme() {
    this.setActiveTheme(bootstrapLightPurple);
    localStorage.setItem('ACTIVE_THEME', 'bootstrapLightPurple');
  }
  setFluentLightTheme() {
    this.setActiveTheme(fluentLight);
    localStorage.setItem('ACTIVE_THEME', 'fluentLight');
  }
  setLunaAmberTheme() {
    this.setActiveTheme(lunaAmber);
    localStorage.setItem('ACTIVE_THEME', 'lunaAmber');
  }
  setLunaBlueTheme() {
    this.setActiveTheme(lunaBlue);
    localStorage.setItem('ACTIVE_THEME', 'lunaBlue');
  }
  setLunaGreenTheme() {
    this.setActiveTheme(lunaGreen);
    localStorage.setItem('ACTIVE_THEME', 'lunaGreen');
  }
  setLunaPinkTheme() {
    this.setActiveTheme(lunaPink);
    localStorage.setItem('ACTIVE_THEME', 'lunaPink');
  }
  setMdDarkDeepPurpleTheme() {
    this.setActiveTheme(mdDarkDeepPurple);
    localStorage.setItem('ACTIVE_THEME', 'mdDarkDeepPurple');
  }
  setMdDarkIndigoTheme() {
    this.setActiveTheme(mdDarkIndigo);
    localStorage.setItem('ACTIVE_THEME', 'mdDarkIndigo');
  }
  setMdLightDeepPurpleTheme() {
    this.setActiveTheme(mdLightDeepPurple);
    localStorage.setItem('ACTIVE_THEME', 'mdLightDeepPurple');
  }
  setMdLightIndigoTheme() {
    this.setActiveTheme(mdLightIndigo);
    localStorage.setItem('ACTIVE_THEME', 'mdLightIndigo');
  }
  setMdcDarkDeepPurpleTheme() {
    this.setActiveTheme(mdcDarkDeepPurple);
    localStorage.setItem('ACTIVE_THEME', 'mdcDarkDeepPurple');
  }
  setMdcLightDeepPurpleTheme() {
    this.setActiveTheme(mdcLightDeepPurple);
    localStorage.setItem('ACTIVE_THEME', 'mdcLightDeepPurple');
  }
  setMdcLightIndigoTheme() {
    this.setActiveTheme(mdcLightIndigo);
    localStorage.setItem('ACTIVE_THEME', 'mdcLightIndigo');
  }
  setNovaTheme() {
    this.setActiveTheme(nova);
    localStorage.setItem('ACTIVE_THEME', 'nova');
  }
  setNovaAccentTheme() {
    this.setActiveTheme(novaAccent);
    localStorage.setItem('ACTIVE_THEME', 'novaAccent');
  }
  setNovaAltTheme() {
    this.setActiveTheme(novaAlt);
    localStorage.setItem('ACTIVE_THEME', 'novaAlt');
  }
  setRheaTheme() {
    this.setActiveTheme(rhea);
    localStorage.setItem('ACTIVE_THEME', 'rhea');
  }
  setSagaBlueTheme() {
    this.setActiveTheme(sagaBlue);
    localStorage.setItem('ACTIVE_THEME', 'sagaBlue');
  }
  setSagaGreenTheme() {
    this.setActiveTheme(sagaGreen);
    localStorage.setItem('ACTIVE_THEME', 'sagaGreen');
  }
  setSagaOrangeTheme() {
    this.setActiveTheme(sagaOrange);
    localStorage.setItem('ACTIVE_THEME', 'sagaOrange');
  }
  setSagaPurpleTheme() {
    this.setActiveTheme(sagaPurple);
    localStorage.setItem('ACTIVE_THEME', 'sagaPurple');
  }
  setVelaBlueTheme() {
    this.setActiveTheme(velaBlue);
    localStorage.setItem('ACTIVE_THEME', 'velaBlue');
  }
  setVelaOrangeTheme() {
    this.setActiveTheme(velaOrange);
    localStorage.setItem('ACTIVE_THEME', 'velaOrange');
  }
  setVelaGreenTheme() {
    this.setActiveTheme(velaGreen);
    localStorage.setItem('ACTIVE_THEME', 'velaGreen');
  }
  setVelaPurpleTheme() {
    this.setActiveTheme(velaPurple);
    localStorage.setItem('ACTIVE_THEME', 'velaPurple');
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    switch (this.active) {
      case bootstrapLightBlue:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdcDarkIndigo:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case aryaBlue:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case aryaGreen:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case aryaOrange:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case aryaPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case bootstrapDarkBlue:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case bootstrapDarkPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case bootstrapLightPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case fluentLight:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case lunaAmber:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case lunaBlue:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case lunaGreen:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case lunaPink:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdDarkDeepPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdDarkIndigo:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdLightDeepPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdLightIndigo:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdcDarkDeepPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdcLightDeepPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case mdcLightIndigo:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case nova:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case novaAccent:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case novaAlt:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case rhea:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case sagaBlue:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case sagaGreen:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case sagaOrange:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case sagaPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case velaBlue:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case velaOrange:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case velaGreen:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      case velaPurple:
        document.getElementById('theme').removeAttribute('href');
        document.getElementById('theme').setAttribute('href', theme.url);
        break;

      default:
        document
          .getElementById('theme')
          .setAttribute(
            'href',
            'assets/themes/mdc-dark-indigo/mdc-dark-indigo.min.css'
          );
    }
  }
}
