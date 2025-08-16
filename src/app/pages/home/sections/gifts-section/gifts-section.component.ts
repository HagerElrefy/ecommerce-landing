import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GiftsSliderComponent } from '../../../../components/gifts-slider/gifts-slider.component';
import { GiftsCardComponent } from '../../../../components/gifts-card/gifts-card.component';
import { GiftCardComponent } from "../../../../components/gift-card/gift-card.component";

@Component({
  selector: 'app-gifts-section',
  imports: [GiftsCardComponent, GiftsSliderComponent, CommonModule, GiftCardComponent],
  templateUrl: './gifts-section.component.html',
  styleUrl: './gifts-section.component.scss'
})
export class GiftsSectionComponent {
  giftCardData = {
    image: "assets/bg-pic-4.png ", title: "Start $10.99", text: "Special Gifts Box For Your Love",
    subTitle: undefined,
    justifyContent: "justify-content-end"
  }

  giftSliderData = [
    {
      image: "assets/bg-pic-1.jpg ", title: "Best Gift Shop", subTitle: {
        first: "Choose Perfect ", second: "Gifts", third: " From Us"
      }, text: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et."
    },
    {
      image: "assets/bg-pic-1.jpg ", title: "Best Gift Shop", subTitle: {
        first: "Choose Perfect ", second: "Gifts", third: " From Us"
      }, text: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et."
    },
    {
      image: "assets/bg-pic-1.jpg ", title: "Best Gift Shop", subTitle: {
        first: "Choose Perfect ", second: "Gifts", third: " From Us"
      }, text: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et."
    }, {
      image: "assets/bg-pic-1.jpg ", title: "Best Gift Shop", subTitle: {
        first: "Choose Perfect ", second: "Gifts", third: " From Us"
      }, text: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et."
    }

  ]

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 1, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ]

  giftsInfoData = [
    {
      image: "assets/pic (7).png",
      title: "Gifts Box",
      text: "Awesome Gifts Box Collectons",
      btn: "Shop Now",
      titleBaseColor: true
    },
    {
      image: "assets/pic (6).png",
      title: "Occasion Gifts",
      text: "Best Occasion GiftsCollections",
      btn: "Discover Now",
      titleBaseColor: true
    },
    {
      image: "assets/pic (8).png",
      title: "Occasion Gifts",
      text: "Combo Sets Gift BoxUp To 50% Off",
      btn: "Discover Now",
      titleBaseColor: false
    }
  ]
}
