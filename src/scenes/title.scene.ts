import { state } from '../modules/game-state';
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
   * Create components in Title Scene.
   */
  create(): void {
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
    button.load();
  }

  /**
   * Update components in Title Scene.
   */
  update(): void {}
}
