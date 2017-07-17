import { Component, Input } from '@angular/core';
import { Joke } from './joke.class';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
    <h4 class="card-title">{{ data.setup }}</h4>
    <p class="card-text" [hidden]="data.hide">{{ data.punchline }}</p>
    <button class="btn btn-primary"
      (click)="data.toggle()">Tell Me</button>
  </div>
  `
})
export class JokeComponent {
  @Input('joke') data: Joke;
}