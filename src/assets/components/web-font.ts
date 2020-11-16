import WebFontLoader from 'webfontloader';

import { state } from '../../game-state';

export default class WebFontFile extends Phaser.Loader.File {
  private gameState: any = state;
  private service: string;
  private fontNames: string[];

  constructor(
    loader: Phaser.Loader.LoaderPlugin,
    fontNames: string | string[],
    service = 'google'
  ) {
    super(loader, {
      type: 'webfont',
      key: fontNames.toString(),
    });
    this.fontNames = ([] as string[]).concat(fontNames);
    this.service = service;
  }

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
