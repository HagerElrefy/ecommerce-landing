import { Component, Input } from '@angular/core';
import { ProductCardComponent } from "../../../components/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../../cores/service/loader.service';
import { ProductSkeletonComponent } from '../../../../cores/components/product-skeleton/product-skeleton.component';

@Component({
  selector: 'app-products-section',
  imports: [ProductCardComponent, CommonModule, ProductSkeletonComponent, CommonModule],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss'
})
export class ProductsSectionComponent {
  constructor(public loader: LoaderService) { }

  @Input()
  products: any;

  loaderCardsarr = [1, 2, 3, 4];

}
