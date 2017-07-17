import {Component} from '@angular/core';
import { Joke } from './joke.class';

let joke = new Joke("What did the cheese say when it looked in the mirror?","Halloumi (hello me)");

@Component({
  selector: 'joke',
  template: `
    <h1>{{ setup }}</h1>
    <p>{{ punchline }}</p>
  `
})
export class JokeComponent {
  setup: string;
  punchline: string;

  constructor() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (hello me)";
  }
}