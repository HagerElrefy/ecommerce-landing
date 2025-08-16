import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit {

  @Input()
  rating: number = 0;
  isDecimal: boolean = false;
  ratingArr = [1, 2, 3, 4, 5]

  ngOnInit(): void {
    this.isDecimal = this.rating % 1 !== 0;
  }
}
