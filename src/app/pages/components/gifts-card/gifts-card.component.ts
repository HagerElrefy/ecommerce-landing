import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { BasicButtonComponent } from "../../../shared/basic-button/basic-button.component";

@Component({
  selector: 'app-gifts-card',
  imports: [CommonModule, BasicButtonComponent],
  templateUrl: './gifts-card.component.html',
  styleUrl: './gifts-card.component.scss'
})
export class GiftsCardComponent {

  @Input()
  data: { image: string, title: string, subTitle: { first: string, second: string, third: string } | undefined, text: string } = {
    image: "assets/bg-pic-1.jpg ", title: "Best Gift Shop", subTitle: {
      first: "Choose Perfect ", second: "Gifts", third: " From Us"
    }, text: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et."
  }
  @Input() textStyle: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['textStyle']) {
      this.textStyle = changes['textStyle'].currentValue;
    }
    if (changes['data']) {
      this.data = changes['data'].currentValue
    }
  }
}
