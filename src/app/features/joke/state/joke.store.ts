import { Injectable } from '@angular/core';
import { JokeState } from './joke.state';
import { ObservableStore } from '@codewithdan/observable-store';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Joke } from '../types/joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeStore extends ObservableStore<JokeState> {
  baseUrl = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) {
    super({ trackStateHistory: true, logStateChanges: true });
    this.setState({ jokes: [], joke: undefined }, 'initialized');
  }

  getRandom = (): Observable<Joke> => this.http.get(`${this.baseUrl}/random`).pipe(
    map((data: any) => ({ icon: data.icon_url, id: data.id, text: data.value, categories: [] }))
  )

  addToFavorites = (joke: Joke) => {
    const jokes = this.getState().jokes;
    jokes.push(joke);
    this.setState({ jokes }, 'add to favorites');
  }
}
