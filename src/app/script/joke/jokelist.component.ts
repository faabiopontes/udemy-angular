import { Component } from '@angular/core';
import { Joke } from './joke.class';

@Component({
  selector: 'joke-list',
  template: `
    <joke-form (jokeCreated)="addJoke($event)"></joke-form>
    <joke
      (jokeDeleted)="deleteJoke($event)"
      *ngFor="let j of jokes"
      [joke]="j"></joke>
`
})
export class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?","Halloumi (hello me)"),
      new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me","I thought 'That's not very mature'")
    ];
  }

  addJoke(joke) {
    // unshift() adds to the beginning of the array, like a stack
    this.jokes.unshift(joke);
  }

  /*
  TODO: Flesh out the below function to actually delete a joke from the list. Have the function called when the user clicks the delete button.
  */
  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete,1);
    }
  }
}