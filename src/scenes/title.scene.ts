import { state } from '../modules/game-state';

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
  }

  /**
   * Create components in Title Scene.
   */
  create(): void {
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

    // Advance to Instructions Scene
    const advanceToInstructions = () => {
      this.scene.start('InstructionsScene');
    };

    const button = new Button(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (4 / 5),
      'play-button',
      'Play',
      advanceToInstructions,
      'warning',
      false,
      false,
      'lg'
    );

    title.load();
    button.load();
  }

  /**
   * Update components in Title Scene.
   */
  update(): void {}
}
