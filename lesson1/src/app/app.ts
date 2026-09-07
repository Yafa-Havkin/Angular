import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import bootstrap from '../main.server';
import { KabalosList } from './components/kabalos-list/kabalos-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,KabalosList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lesson1');
}
