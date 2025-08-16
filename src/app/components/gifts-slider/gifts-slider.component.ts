import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gifts-slider',
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './gifts-slider.component.html',
  styleUrl: './gifts-slider.component.scss'
})
export class GiftsSliderComponent {
  @ContentChild(TemplateRef) customTemplate!: TemplateRef<any>;


  @ViewChild('carouselRef') carousel!: Carousel;


  @Input()
  data: any;
  @Input()
  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 1, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  click = new MouseEvent('click')

  goPrev() {
    this.carousel.navBackward(this.click);
  }

  goNext() {
    this.carousel.navForward(this.click);
  }
}
