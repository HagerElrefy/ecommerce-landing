import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { BasicButtonComponent } from "../shared/basic-button/basic-button.component";

@Component({
  selector: 'app-gifts-card',
  imports: [CommonModule, BasicButtonComponent],
  templateUrl: './gifts-card.component.html',
  styleUrl: './gifts-card.component.scss'
})
export class GiftsCardComponent {

  @Input()
  data: { image: string, title: string, subTitle: { first: string, second: string, third: string } | undefined, text: string, justifyContent: string | undefined } = {
    image: "assets/bg-pic-1.jpg ", title: "Best Gift Shop", subTitle: {
      first: "Choose Perfect ", second: "Gifts", third: " From Us"
    }, text: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et."
    , justifyContent: undefined
  }
}
