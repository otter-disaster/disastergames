import { Component, signal } from '@angular/core';
import { Start } from './start/start';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Start]
})
export class App {
  protected readonly title = signal('app');
}
