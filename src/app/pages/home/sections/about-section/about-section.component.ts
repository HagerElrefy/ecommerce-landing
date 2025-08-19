import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { BasicButtonComponent } from "../../../../shared/basic-button/basic-button.component";

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, BasicButtonComponent, AvatarModule, OverlayBadgeModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

  list = [
    "Streamlined Shipping Experience",
    "Affordable Modern Design",
    "Competitive Price & Easy To Shop",
    "We Made Awesome Products"
  ]
}
