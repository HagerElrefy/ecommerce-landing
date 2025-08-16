import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingComponent } from "../shared/rating/rating.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CardModule, ButtonModule, RatingComponent, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',

})
export class ProductCardComponent {
  @Input()
  product: any;
}
