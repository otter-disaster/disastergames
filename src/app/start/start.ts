import { Component, signal } from '@angular/core';
import { Scoundrel } from '../scoundrel/scoundrel';

@Component({
  selector: 'app-start',
  imports: [Scoundrel],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})

export class Start {
  protected readonly title = signal('start');
  isStartMenu = true;
  isPlayScoundrel = false;

  playScoundrel() {
    this.isStartMenu = false;
    this.isPlayScoundrel = true;
  }

  backToStart() {
    this.isStartMenu = true;
    this.isPlayScoundrel = false;
  }
}
