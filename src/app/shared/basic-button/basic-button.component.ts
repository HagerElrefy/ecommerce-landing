import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  imports: [],
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss'
})
export class BasicButtonComponent {
  @Input()
  btnValue: string = ""
}
