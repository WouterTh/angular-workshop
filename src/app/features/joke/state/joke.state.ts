import { Joke } from '../types/joke';

export interface JokeState {
    jokes: Joke[];
    joke: Joke;
}
