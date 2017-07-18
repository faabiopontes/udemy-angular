import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from './joke.class';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
    <h4 class="card-title">{{ data.setup }}</h4>
    <p class="card-text" [hidden]="data.hide">{{ data.punchline }}</p>
    <button class="btn btn-primary"
      (click)="data.toggle()">Tell Me</button>
    <button class="btn btn-danger"
      (click)="deleteItem()">Delete</button>
  </div>
  `
})
export class JokeComponent {
  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    console.log("jokeDeleted");
    this.jokeDeleted.emit(this.data);
  }
}