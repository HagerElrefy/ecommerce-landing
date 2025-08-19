import { Component, input, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingComponent } from "../../../shared/rating/rating.component";
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

  @Input()
  isSlideCard: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["product"]) {
      this.product = changes["product"].currentValue;
    }
    if (changes["isSlideCard"]) {
      console.log(changes["isSlideCard"].currentValue)
      this.isSlideCard = changes["isSlideCard"].currentValue
    }
  }
}
