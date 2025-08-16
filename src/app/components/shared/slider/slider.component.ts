import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

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
