import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-gift-card',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.scss'
})
export class GiftCardComponent {
  @Input()
  data = {
    image: "",
    title: "",
    text: "",
    btn: "",
    titleBaseColor: false

  }
}
