import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {UserDisplayModule} from './user-display/user-display.module'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserDisplayModule],
  template: `
    <app-user-display></app-user-display>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
