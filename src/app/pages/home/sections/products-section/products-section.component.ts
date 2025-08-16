import { Component, Input } from '@angular/core';
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-section',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss'
})
export class ProductsSectionComponent {
  @Input()
  products: any;
}
