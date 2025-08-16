import { Component } from '@angular/core';
import { SliderComponent } from "../../../../components/shared/slider/slider.component";
import { ReviewCardComponent } from "../../../../components/review-card/review-card.component";

@Component({
  selector: 'app-reviews-section',
  imports: [SliderComponent, ReviewCardComponent],
  templateUrl: './reviews-section.component.html',
  styleUrl: './reviews-section.component.scss'
})
export class ReviewsSectionComponent {
  reviews = [
    {
      avatar: "assets/person1.jpg",
      name: "Ahmed Mohamed",
      role: "Customer",
      review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
      rate: 4
    },
    {
      avatar: "assets/person2.jpg",
      name: "Ahmed Mohamed",
      role: "Customer",
      review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
      rate: 4
    },
    {
      avatar: "assets/person3.jpg",
      name: "Ahmed Mohamed",
      role: "Customer",
      review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
      rate: 4
    },
    {
      avatar: "assets/person4.jpg",
      name: "Ahmed Mohamed",
      role: "Customer",
      review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
      rate: 4
    },
    {
      avatar: "assets/person1.jpg",
      name: "Ahmed Mohamed",
      role: "Customer",
      review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
      rate: 4
    }
  ];
  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 4, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ]
}
