import { Directive, input } from '@angular/core';

@Directive({
  selector: 'img[alt]',
  host: {
    '[attr.title]': 'alt()'
  }
})
export class ImageAlt {
  readonly alt = input<string>();

}
