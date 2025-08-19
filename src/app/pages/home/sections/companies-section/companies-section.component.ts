import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Component } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@Component({
  selector: 'app-companies-section',
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, NgxFastMarqueeModule],
  templateUrl: './companies-section.component.html',
  styleUrl: './companies-section.component.scss'
})
export class CompaniesSectionComponent {

  items = ['one', 'two', 'three', 'four'];


  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 2,
      numScroll: 1,
    },
  ];

  companies = [
    "assets/company-1.png",
    "assets/company-2.png",
    "assets/company-3.png",
    "assets/company-4.png",
    "assets/company-5.png",
    "assets/company-6.png"
  ];

}
