import { Component, OnInit } from '@angular/core';
import { JokeStore } from '../../state/joke.store';
import { Joke } from '../../types/joke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  joke$: Observable<Joke>;

  constructor(public store: JokeStore) { }

  ngOnInit() {
    this.joke$ = this.store.getRandom();
  }

  onRefresh = () => this.joke$ = this.store.getRandom();

  onFavorite = (joke: Joke) => this.store.addToFavorites(joke);
}
