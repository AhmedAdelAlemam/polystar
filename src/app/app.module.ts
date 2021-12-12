import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { StyleManagerComponent } from './components/style-manager/style-manager.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, StyleManagerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TableModule,

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
