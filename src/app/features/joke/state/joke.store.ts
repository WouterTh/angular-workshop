import { Injectable } from '@angular/core';
import { JokeState } from './joke.state';
import { ObservableStore } from '@codewithdan/observable-store';

@Injectable({
  providedIn: 'root'
})
export class JokeStore extends ObservableStore<JokeState> {

  constructor() {
    super({ trackStateHistory: true });
    this.setState({ jokes: [], joke: undefined });
  }
}
