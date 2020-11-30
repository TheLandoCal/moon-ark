/**
 * Board Component
 * @module board/component
 */

import MoonArkCard from '../card/card.component';
import MoonArkImage from '../image/image.component';

import { Deck, Decks } from './deck.interface';
import { DeckName } from './deck.types';

import {
  centerGroupVertically,
  centerVertically,
  positionHorizontally,
  scaleToGameHeight,
  sizeRectangularDropZone,
} from '../game-util';
import MoonArkText from '../text/text.component';

/**
 * Moon Ark Board Component.
 */
export default class MoonArkBoard {
  private scene: Phaser.Scene;
  private deckTops = [] as MoonArkImage[];
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
    centerGroupVertically(this.deckTops);

    Object.values(this.decks)
      .filter((deck) => deck.name !== 'default')
      .forEach((deck) => {
        deck.top.load();
        deck.label.y = deck.top.y + deck.label.displayWidth / 2;
        deck.label.load();
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

      this.setTopCard(deck);
      this.setDeckLabel(deck);
    }

    return deck;
  }

  private setTopCard(deck: Deck): void {
    const topCard: MoonArkCard = deck.cards[0];
    topCard.sprite.setInteractive();
    topCard.sprite.setScale(0.12);
    positionHorizontally(topCard.sprite, 0.15);
    centerVertically(topCard.sprite);

    topCard.sprite.on('pointerdown', () => {
      topCard.deal();
      // TODO: Move card to hand
      // TODO: Set next top card
    });

    deck.top = topCard.sprite;
    this.deckTops.push(topCard.sprite);
  }

  private setDeckLabel(deck: Deck): void {
    const label = new MoonArkText(this.scene, deck.name.toUpperCase(), {
      fontFamily: '"Amatic SC"',
      fontSize: '24px',
      align: 'center',
    });

    positionHorizontally(label, 0.22);
    centerVertically(label);
    label.setRotation(-Math.PI / 2);

    deck.label = label;
  }
}
