import { Component } from '@angular/core';
import { FeatureCardComponent } from "../../../components/feature-card/feature-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  imports: [FeatureCardComponent, CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: "assets/features-icon-1.png",
      feature: "Free Delivery",
      details: "Orders Over $120"
    },
    {
      icon: "assets/features-icon-2.png",
      feature: "Get Refund",
      details: "Within 30 Days Returns"
    },
    {
      icon: "assets/features-icon-3.png",
      feature: "Safe Payment",
      details: "100% Secure Payment"
    },
    {
      icon: "assets/features-icon-4.png",
      feature: "24/7 Support",
      details: "Feel Free To Call Us"
    }
  ]
}
