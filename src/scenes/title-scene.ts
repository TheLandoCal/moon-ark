import { state } from '../game-state';
import ButtonComponent from '../assets/components/button';

export default class TitleScene extends Phaser.Scene {
  private state: any = state;

  constructor() {
    super({
      key: 'TitleScene',
    });
  }

  create(): void {
    const clickCallback = () => {
      this.scene.start('InstructionsScene');
    };

    const button = new ButtonComponent(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (4 / 5),
      'play-button',
      'Play',
      clickCallback,
      'warning',
      false,
      false,
      'lg'
    );
    button.load();
  }

  update(): void {}
}
