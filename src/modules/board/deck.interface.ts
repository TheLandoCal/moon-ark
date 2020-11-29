import MoonArkCard from '../card/card.component';
import MoonArkImage from '../image/image.component';
import MoonArkText from '../text/text.component';
import { DeckName } from './deck.types';

export interface Deck {
  name: DeckName;
  cards: MoonArkCard[];
  top: MoonArkImage;
  label: MoonArkText;
}

export type Decks = {
  [key in DeckName]: Deck;
};
