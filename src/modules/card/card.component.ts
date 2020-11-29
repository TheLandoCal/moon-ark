/**
 * Card Component
 * @module card/component
 */

import { DeckName } from './card.types';

import MoonArkImage from '../image/image.component';

// const DEFAULT_ROUTE_STOPS: number[] = [1, 2, 3, 42];

/**
 * Moon Ark Card Component.
 */
export default class MoonArkCard {
  readonly sprite: MoonArkImage;
  readonly routeStop: number;
  readonly boost: number;
  readonly deck: DeckName;
  /**
   * Create a Moon Ark City Card Component
   * @param {string} spriteName - Name of Card Sprite
   * @param {number} routeStop - Route Stop Number
   */
  constructor(scene: Phaser.Scene, spriteName: string, routeStop: number) {
    this.sprite = new MoonArkImage(scene, spriteName);
    this.routeStop = routeStop;
    this.boost = routeStop % 2 === 0 ? 2 : 1;
    this.deck = this.getDeckName();
  }

  private getDeckName(): DeckName {
    if (4 <= this.routeStop && this.routeStop <= 14) {
      return 'Local';
    } else if (15 <= this.routeStop && this.routeStop <= 28) {
      return 'National';
    } else if (29 <= this.routeStop && this.routeStop <= 41) {
      return 'Global';
    }

    return null;
  }
}
