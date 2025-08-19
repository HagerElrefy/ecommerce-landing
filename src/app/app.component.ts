import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavBarComponent } from "./cores/nav-bar/nav-bar.component";
import { FooterComponent } from "./cores/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
}
