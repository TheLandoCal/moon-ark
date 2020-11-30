/**
 * Card Component
 * @module card/component
 */

import { DeckName } from '../board/deck.types';

import MoonArkImage from '../image/image.component';

// const DEFAULT_ROUTE_STOPS: number[] = [1, 2, 3, 42];

/**
 * Moon Ark Card Component.
 */
export default class MoonArkCard {
  sprite: MoonArkImage;
  name: string;
  private dealt = false;
  readonly routeStop: number;
  readonly boost: number | null;
  readonly deck: DeckName;
  /**
   * Create a Moon Ark City Card Component
   * @param {string} spriteName - Name of Card Sprite
   * @param {number} routeStop - Route Stop Number
   */
  constructor(scene: Phaser.Scene, routeStop: number) {
    this.name = `#${routeStop.toString().padStart(2, '0')}`;
    this.sprite = new MoonArkImage(scene, 'card-back');
    this.routeStop = routeStop;
    this.boost = this.getBoostNumber(routeStop);
    this.deck = this.getDeckName();
  }

  private getDeckName(): DeckName {
    if (4 <= this.routeStop && this.routeStop <= 14) {
      return 'local';
    } else if (15 <= this.routeStop && this.routeStop <= 28) {
      return 'national';
    } else if (29 <= this.routeStop && this.routeStop <= 41) {
      return 'global';
    }

    return 'default';
  }

  private getBoostNumber(routeStop: number): number | null {
    if (routeStop === 0 || routeStop === 42) {
      return null;
    }

    return routeStop % 2 === 0 ? 2 : 1;
  }

  public deal(): void {
    if (!this.dealt) {
      this.dealt = true;
      this.sprite.setTexture(this.name);
    }
  }
}
