/**
 * Board Component
 * @module board/component
 */

import MoonArkCard from './card.component';

import { Deck, Decks } from '../interfaces/deck.interface';
import { DeckName } from '../types/deck.types';

import {
  centerGroupVertically,
  centerVertically,
  positionHorizontally,
  scaleToGameHeight,
  sizeRectangularDropZone,
} from '../utilities/layout.utility';
import MoonArkText from './text.component';

/**
 * Moon Ark Board Component.
 */
export default class MoonArkBoard {
  private scene: Phaser.Scene;
  readonly decks: Decks;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.decks = {
      default: this.shuffle('default', 0, 3),
      local: this.shuffle('local', 4, 14),
      national: this.shuffle('national', 15, 28),
      global: this.shuffle('global', 29, 41),
    };
  }

  setup(): void {
    this.drawDeckZone();
    this.loadDecks();
  }

  private drawDeckZone(): void {
    let zone = new Phaser.GameObjects.Zone(this.scene, 0, 0, 1, 3);
    zone.setName('City Decks');

    scaleToGameHeight(zone, 0.98);
    centerVertically(zone);
    positionHorizontally(zone, 0.15);
    sizeRectangularDropZone(zone);

    let deckOutline = this.scene.add.graphics();
    deckOutline.lineStyle(4, 0xffffff);
    deckOutline.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );

    this.scene.add.existing(zone);
  }

  private loadDecks(): void {
    const cityDecks = Object.values(this.decks).filter((deck) => deck.name !== 'default');

    centerGroupVertically(cityDecks.map((deck) => deck.cards[0].sprite));

    cityDecks.forEach((deck) => {
      deck.cards[0].sprite.load();
      this.displayDeckLabel(deck);
    });
  }

  private shuffle(name: DeckName, begin: number, end: number): Deck {
    let deck = { name: name, cards: [] as MoonArkCard[] } as Deck;

    for (let i = begin; i <= end; i++) {
      let card = new MoonArkCard(this.scene, i);
      deck.cards.push(card);
    }

    if (name === 'default') {
      let finalCard = new MoonArkCard(this.scene, 42);
      deck.cards.push(finalCard);
    } else {
      for (let currentIdx = deck.cards.length - 1; currentIdx > 0; currentIdx--) {
        const swapIdx = Math.floor(Math.random() * (currentIdx + 1));
        [deck.cards[currentIdx], deck.cards[swapIdx]] = [
          deck.cards[swapIdx],
          deck.cards[currentIdx],
        ];
      }

      this.displayTopCard(deck);
    }

    return deck;
  }

  private displayTopCard(deck: Deck): void {
    const topCard: MoonArkCard = deck.cards[0];
    topCard.sprite.setScale(0.12);
    positionHorizontally(topCard.sprite, 0.15);
    centerVertically(topCard.sprite);

    topCard.setDraggable(() => {
      // TODO: Create Hand Zone
      // TODO: Set next top card
      if (!topCard.dealt) {
        topCard.dealt = true;
        topCard.sprite.setTexture(topCard.name);
        topCard.sprite.disableInteractive();
        deck.cards.shift();
      }
    });
  }

  private displayDeckLabel(deck: Deck): void {
    deck.label = new MoonArkText(this.scene, deck.name.toUpperCase(), {
      fontFamily: '"Amatic SC"',
      fontSize: '24px',
      align: 'center',
    });

    positionHorizontally(deck.label, 0.22);
    centerVertically(deck.label);
    deck.label.setRotation(-Math.PI / 2);

    deck.label.y = deck.cards[0].sprite.y + deck.label.displayWidth / 2;
    deck.label.load();
  }
}
