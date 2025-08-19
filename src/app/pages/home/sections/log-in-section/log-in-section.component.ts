import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-log-in-section',
  imports: [Dialog, ButtonModule, InputTextModule],
  templateUrl: './log-in-section.component.html',
  styleUrl: './log-in-section.component.scss'
})
export class LogInSectionComponent {
  @Input() isLoginBtnClicked: boolean = false;
  @Output() closed = new EventEmitter<void>();

  visible = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoginBtnClicked']?.currentValue) {
      this.visible = true;
    }
  }

  onHide() {
    this.closed.emit();
  }
}
