import { Component } from '@angular/core';

@Component({
  selector: 'button[crazy]',
  imports: [],
  templateUrl: './crazy-button.html',
  styleUrl: './crazy-button.scss',
  host: {
    '[style.border]': '"1px solid var(--color-secondary)"',
  }
})
export class CrazyButton {

}
