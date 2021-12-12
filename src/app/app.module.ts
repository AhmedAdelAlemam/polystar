import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { StyleManagerComponent } from './components/style-manager/style-manager.component';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleManagerModule } from './components/style-manager/style-manager.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [AppComponent, StyleManagerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TableModule,
    SidebarModule,
    RippleModule,
    ButtonModule,
    StyleManagerModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
