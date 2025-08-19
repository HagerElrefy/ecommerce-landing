import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../../components/category-card/category-card.component';

@Component({
  selector: 'app-categories-section',
  imports: [CategoryCardComponent, CommonModule],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {
  categories = [
    {
      icon: "assets/category-icon-1.png",
      category: "Gifts Box",
      numOfItems: 30
    },
    {
      icon: "assets/category-icon-2.png",
      category: "Home & Living Gifts",
      numOfItems: 25
    },
    {
      icon: "assets/category-icon-3.png",
      category: "Jewelry & Accessories",
      numOfItems: 15
    }, {
      icon: "assets/category-icon-4.png",
      category: "Garment Care",
      numOfItems: 5
    }, {
      icon: "assets/category-icon-5.png",
      category: "Office & Stationery",
      numOfItems: 30
    },

  ]
}
