import { Component, Input } from '@angular/core';
import { CategoriesSectionComponent } from './sections/categories-section/categories-section.component';
import { GiftsSectionComponent } from './sections/gifts-section/gifts-section.component';
import { NavBarComponent } from '../../cores/components/nav-bar/nav-bar.component';
import { FeaturesSectionComponent } from "./sections/features-section/features-section.component";
import { BestSellerSectionComponent } from "./sections/best-seller-section/best-seller-section.component";
// import { ProductService } from '../../cores/service/product.service';
import { ProductsSectionComponent } from "./sections/products-section/products-section.component";
import { AboutSectionComponent } from "./sections/about-section/about-section.component";
import { GallarySectionComponent } from "./sections/gallary-section/gallary-section.component";
import { ReviewsSectionComponent } from "./sections/reviews-section/reviews-section.component";
import { CompaniesSectionComponent } from "./sections/companies-section/companies-section.component";
import { FooterComponent } from "../../cores/components/footer/footer.component";
import { ProductSkeletonComponent } from '../../cores/components/product-skeleton/product-skeleton.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { LogInSectionComponent } from './sections/log-in-section/log-in-section.component';
import { ProductService } from '../../cores/service/apiServices/product.service';


@Component({
  selector: 'app-home',
  imports: [GiftsSectionComponent, CategoriesSectionComponent, FeaturesSectionComponent, BestSellerSectionComponent, ProductsSectionComponent, AboutSectionComponent, GallarySectionComponent, ReviewsSectionComponent, CompaniesSectionComponent, ProductSkeletonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: any;

  constructor(private productService: ProductService) { }
  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ]

  test = [1, 2, 3, 4];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(this.products);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
