import MoonArkCard from '../card/card.component';
import MoonArkText from '../text/text.component';
import { DeckName } from './deck.types';

export interface Deck {
  name: DeckName;
  cards: MoonArkCard[];
  label: MoonArkText;
}

export type Decks = {
  [key in DeckName]: Deck;
};
