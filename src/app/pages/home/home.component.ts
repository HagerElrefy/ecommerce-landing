import { Component } from '@angular/core';
import { CategoriesSectionComponent } from './sections/categories-section/categories-section.component';
import { GiftsSectionComponent } from './sections/gifts-section/gifts-section.component';
import { NavBarComponent } from '../../components/cores/nav-bar/nav-bar.component';
import { FeaturesSectionComponent } from "./sections/features-section/features-section.component";
import { BestSellerSectionComponent } from "./sections/best-seller-section/best-seller-section.component";
import { ProductService } from '../../service/product.service';
import { ProductsSectionComponent } from "./sections/products-section/products-section.component";
import { AboutSectionComponent } from "./sections/about-section/about-section.component";
import { GallarySectionComponent } from "./sections/gallary-section/gallary-section.component";
import { ReviewsSectionComponent } from "./sections/reviews-section/reviews-section.component";
import { CompaniesSectionComponent } from "./sections/companies-section/companies-section.component";
import { FooterComponent } from "../../components/cores/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, GiftsSectionComponent, CategoriesSectionComponent, FeaturesSectionComponent, BestSellerSectionComponent, ProductsSectionComponent, AboutSectionComponent, GallarySectionComponent, ReviewsSectionComponent, CompaniesSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: any;

  constructor(private productService: ProductService) { }

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
