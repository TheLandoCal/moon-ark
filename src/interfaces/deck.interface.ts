import MoonArkCard from '../components/card.component';
import MoonArkText from '../components/text.component';
import { DeckName } from '../types/deck.types';

export interface Deck {
  name: DeckName;
  cards: MoonArkCard[];
  label: MoonArkText;
}

export type Decks = {
  [key in DeckName]: Deck;
};
