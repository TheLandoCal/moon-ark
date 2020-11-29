import {
  advance,
  center,
  centerOrigin,
  centerGroupHorizontally,
  positionVertically,
  scaleToGameWidth,
} from '../modules/game-util';

import MoonArkText from '../modules/text/text.component';
import MoonArkButton from '../modules/button/button.component';

import WebFont from '../modules/web-font/web-font.service';

/** Moon Ark Title Scene. */
export default class TitleScene extends Phaser.Scene {
  /**
   * Create a Title Scene.
   */
  constructor() {
    super({
      key: 'TitleScene',
    });
  }

  /**
   * Pre-load components in Title Scene.
   */
  preload() {
    this.load.addFile(new WebFont(this.load, 'Amatic SC'));
    this.load.image('logo', 'assets/Logo.png');
  }

  /**
   * Create components in Title Scene.
   */
  create(): void {
    const logo = this.add.image(0, 0, 'logo');

    const title = new MoonArkText(this, 'Moon Ark', {
      fontFamily: '"Amatic SC"',
      fontSize: '72px',
      align: 'center',
    });

    const playButton = new MoonArkButton(
      this,
      'play-button',
      'Play',
      () => advance(this.scene, 'GameScene'),
      'warning',
      false,
      false,
      'lg'
    );

    const instructionsButton = new MoonArkButton(
      this,
      'instructions-button',
      'Instructions',
      () => advance(this.scene, 'InstructionsScene'),
      'warning',
      false,
      false,
      'lg'
    );

    center(logo);
    scaleToGameWidth(logo, 1);
    center(title);
    centerOrigin(title);
    positionVertically(playButton, 0.8);
    positionVertically(instructionsButton, 0.8);
    centerGroupHorizontally([playButton, instructionsButton]);

    title.load();
    playButton.load();
    instructionsButton.load();
  }

  /**
   * Update components in Title Scene.
   */
  update(): void {}
}
