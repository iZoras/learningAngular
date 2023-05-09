import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() message!: string;
  @Input() link: string = '';
  @Input() isShown: boolean = false;
}
