import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Joke } from '../../types/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Input()
  joke: Joke;

  @Output()
  refresh = new EventEmitter<void>();

  @Output()
  favorite = new EventEmitter<Joke>();

  onRefresh = () => this.refresh.emit();

  onFavorited = () => this.favorite.emit(this.joke);
}
