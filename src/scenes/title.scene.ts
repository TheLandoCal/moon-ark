import { state } from '../modules/game-state';
import { advance, scaleToGameWidth } from '../modules/game-util';

import WebFont from '../modules/web-font/web-font.service';
import Text from '../modules/text/text.component';
import Button from '../modules/button/button.component';

/** Moon Ark Title Scene. */
export default class TitleScene extends Phaser.Scene {
  private state: any = state;

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
    const logo = this.add.image(
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (1 / 2),
      'logo'
    );
    scaleToGameWidth(logo, 1);

    const title = new Text(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (1 / 2),
      'Moon Ark',
      {
        fontFamily: '"Amatic SC"',
        fontSize: '72px',
        align: 'center',
      }
    );
    title.setOrigin(0.5);

    const playButton = new Button(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (4 / 5),
      'play-button',
      'Play',
      () => advance(this.scene, 'GameScene'),
      'warning',
      false,
      false,
      'lg'
    );

    const instructionsButton = new Button(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (4 / 5),
      'instructions-button',
      'Instructions',
      () => advance(this.scene, 'InstructionsScene'),
      'warning',
      false,
      false,
      'lg'
    );

    const centerOffset = (playButton.displayWidth + instructionsButton.displayWidth) / 2;
    playButton.x -= centerOffset;
    instructionsButton.x += centerOffset;

    title.load();
    playButton.load();
    instructionsButton.load();
  }

  /**
   * Update components in Title Scene.
   */
  update(): void {}
}
