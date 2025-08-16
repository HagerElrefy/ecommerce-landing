import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-section',
  imports: [CommonModule],
  templateUrl: './companies-section.component.html',
  styleUrl: './companies-section.component.scss'
})
export class CompaniesSectionComponent {
  companies = [
    "assets/company-1.png",
    "assets/company-2.png",
    "assets/company-3.png",
    "assets/company-4.png",
    "assets/company-5.png",
    "assets/company-6.png",
  ]
}
