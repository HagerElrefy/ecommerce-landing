import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavBarComponent } from "./cores/components/nav-bar/nav-bar.component";
import { FooterComponent } from "./cores/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { AuthFormsComponent } from "./cores/components/auth-forms/auth-forms.component";
import { AuthFormsToggleService } from './cores/service/auth-forms-toggle.service';
import { CategoriesComponent } from "./pages/categories/categories.component";
// RouterOutlet,
@Component({
  selector: 'app-root',
  imports: [HomeComponent, NavBarComponent, FooterComponent, CommonModule, AuthFormsComponent, CategoriesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public authFormsToggle: AuthFormsToggleService) { }
}
