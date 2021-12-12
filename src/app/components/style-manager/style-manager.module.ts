import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ThemeChangerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    RouterModule,
    SidebarModule,
    ButtonModule,
    ProgressSpinnerModule,
    TooltipModule,
  ],
  exports: [ThemeChangerComponent],
})
export class StyleManagerModule {}
