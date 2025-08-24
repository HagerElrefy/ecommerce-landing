import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavBarComponent } from "./cores/components/nav-bar/nav-bar.component";
import { FooterComponent } from "./cores/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { AuthFormsComponent } from "./cores/components/auth-forms/auth-forms.component";
import { AuthFormsToggleService } from './cores/service/auth-forms-toggle.service';
// RouterOutlet,
@Component({
  selector: 'app-root',
  imports: [HomeComponent, NavBarComponent, FooterComponent, CommonModule, AuthFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public authFormsToggle: AuthFormsToggleService) { }
}
