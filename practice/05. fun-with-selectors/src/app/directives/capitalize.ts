import { Directive } from '@angular/core';

@Directive({
  selector: 'input[type="text"][capitals]',
  standalone: true,
  host: {
    '(blur)': 'capitalize($event.target)',
  }
})
export class Capitalize {
  capitalize(target: EventTarget | null) {
    if (target instanceof HTMLInputElement) {
      target.value = target.value
        .split(' ')
        .map((word) =>
          word.length > 0
            ? word.charAt(0).toUpperCase() + word.slice(1)
            : word,
        )
        .join(' ');
    }
  }
}
