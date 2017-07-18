import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke.class';

@Component({
  selector: 'joke-form',
  templateUrl: './jokeform.component.html'
})
export class JokeFormComponent {
  // here we are creating a type of output event
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    // and the return to this output event is a new instance of Joke class
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}