import { Component, Input } from '@angular/core';
import { Avatar } from "primeng/avatar";
import { RatingComponent } from "../../../shared/rating/rating.component";

@Component({
  selector: 'app-review-card',
  imports: [Avatar, RatingComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  @Input()
  review: any;
}
