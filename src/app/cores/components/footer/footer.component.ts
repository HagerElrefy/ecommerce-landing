import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, InputGroup, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = [
    "About US",
    "Store Location",
    "Contact",
    "Delivery",
    "Policy",
    "FAQS"
  ]
}
