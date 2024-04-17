import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Input() isDisabled = false;
  @Output() handleClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.handleClick.emit();
  }
}
