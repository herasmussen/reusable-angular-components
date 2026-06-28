import { Component } from '@angular/core';
import { APP_SHARED_IMPORTS } from './shared/shared-imports';

@Component({
  selector: 'app-root',
  imports: [...APP_SHARED_IMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
