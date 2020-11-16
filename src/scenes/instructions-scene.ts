import { state } from '../game-state';

import WebFontFile from '../assets/components/web-font';
import TextComponent from '../assets/components/text';
import ButtonComponent from '../assets/components/button';

export default class InstructionsScene extends Phaser.Scene {
  private state: any = state;

  constructor() {
    super({
      key: 'InstructionsScene',
    });
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, 'Roboto'));
  }

  create(): void {
    // TODO: Fix Text Scaling
    const title = new TextComponent(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (1 / 2),
      'How To Play',
      {
        fontFamily: 'Roboto',
        fontSize: '36px',
        align: 'center',
      }
    );
    title.setOrigin(0.5);

    const clickCallback = () => {
      // TODO: Advance to Game Scene
      // this.scene.start('GameScene');
    };

    const button = new ButtonComponent(
      this,
      this.state.screen.width * (1 / 2),
      this.state.screen.height * (4 / 5),
      'start-button',
      'Start',
      clickCallback,
      'success',
      false,
      false,
      'lg'
    );

    title.load();
    button.load();
  }

  update(): void {}
}
