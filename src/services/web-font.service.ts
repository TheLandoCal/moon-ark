/**
 * WebFont service.
 * @module web-font/service
 */

import WebFontLoader from 'webfontloader';

import { state } from '../state';

export default class WebFont extends Phaser.Loader.File {
  private gameState: any = state;
  private service: string;
  private fontNames: string[];

  /**
   * @param {Phaser.Loader.LoaderPlugin} loader - Phaser Loader Plugin
   * @param {string | string[]} fontNames - A single font name, or an array of font names
   * @param {string} [service=google] - External Web Font Service name
   */
  constructor(
    loader: Phaser.Loader.LoaderPlugin,
    fontNames: string | string[],
    service: string = 'google'
  ) {
    super(loader, {
      type: 'webfont',
      key: fontNames.toString(),
    });
    this.fontNames = ([] as string[]).concat(fontNames);
    this.service = service;
  }

  /**
   * Load component to @class scene.
   */
  load() {
    this.gameState.fonts = {
      active: () => this.loader.nextFile(this, true),
    };

    if (this.service === 'google') {
      this.gameState.fonts.google = { families: this.fontNames };
    } else {
      throw new Error('Unsupported font service');
    }

    WebFontLoader.load(this.gameState.fonts);
  }
}
