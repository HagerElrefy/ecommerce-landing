import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";
import { SliderComponent } from "../../../../components/shared/slider/slider.component";
import { BasicButtonComponent } from "../../../../components/shared/basic-button/basic-button.component";

@Component({
  selector: 'app-best-seller-section',
  imports: [CommonModule, ProductCardComponent, SliderComponent, BasicButtonComponent],
  templateUrl: './best-seller-section.component.html',
  styleUrl: './best-seller-section.component.scss'
})
export class BestSellerSectionComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.somProducts = this.products ? this.products.slice(0, 4) : [];
  }

  @Input()
  products: any;
  somProducts: any
  // ng(): void {
  //   this.somProducts = this.products ? this.products.slice(0, 4) : [];
  //   console.log(this.somProducts);
  // }
  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ]
  // product =
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     rating: {
  //       rate: 3.9,
  //       count: 120
  //     }
  //   }
}
