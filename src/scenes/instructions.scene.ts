import { state } from '../modules/game-state';
import { advance } from '../modules/game-util';

import WebFont from '../modules/web-font/web-font.service';
import Text from '../modules/text/text.component';
import Button from '../modules/button/button.component';

/** Moon Ark Instructions Scene. */
export default class InstructionsScene extends Phaser.Scene {
  private state: any = state;

  /**
   * Create a Instructions Scene.
   */
  constructor() {
    super({
      key: 'InstructionsScene',
    });
  }

  /**
   * Pre-load components in Instructions Scene.
   */
  preload() {
    this.load.addFile(new WebFont(this.load, ['Amatic SC', 'Roboto']));
  }

  /**
   * Create components in Instructions Scene.
   */
  create(): void {
    this.loadTitle();
    this.displayInstruction();
    this.loadNavigation();
    this.loadStartButton();
  }

  /**
   * Update components in Instructions Scene.
   */
  update(): void {}

  private loadTitle(): void {
    const title = new Text(
      this,
      this.state.screen.width * 0.5,
      this.state.screen.height * 0.15,
      'How To Play',
      {
        fontFamily: '"Amatic SC"',
        fontSize: '48px',
        align: 'center',
      }
    );
    title.setOrigin(0.5);
    title.load();
  }

  private displayInstruction(forward = true): void {
    const instructionStyle = {
      fontFamily: 'Roboto',
      fontSize: '24px',
      align: 'center',
      wordWrap: { width: this.state.screen.width * 0.75 },
      lineSpacing: 8,
    };

    const nextInstructionMetadata = this.retrieveNextInstructionMetadata(forward);

    if (this.state.currentInstruction) {
      this.state.currentInstruction.destroy();
    }

    if (nextInstructionMetadata) {
      const nextInstruction = new Text(
        this,
        this.state.screen.width * 0.5,
        this.state.screen.height * 0.45,
        nextInstructionMetadata.text,
        instructionStyle
      );

      nextInstruction.setOrigin(0.5);
      nextInstruction.load();

      this.state.currentInstruction = nextInstruction;
    } else {
      this.state.currentInstruction = undefined;
    }
  }

  private loadNavigation(): void {
    let nextButton = this.state.buttons.find((b: any) => b.name === 'nextButton');

    if (!nextButton) {
      nextButton = {
        name: 'nextButton',
        element: new Button(
          this,
          this.state.screen.width * 0.5,
          this.state.screen.height * 0.8,
          'next-button',
          'Next',
          () => this.displayInstruction(),
          'warning',
          false,
          false,
          'lg'
        ),
      };
    }

    nextButton.element.load();
    this.state.buttons.push(nextButton);
  }

  private retrieveNextInstructionMetadata(forward = true): any {
    const currentInstruction = this.state.currentInstruction;

    if (currentInstruction) {
      const idx = this.state.instructions.findIndex((i: any) => i.text === currentInstruction.text);

      if (idx < this.state.instructions.length - 1) {
        if (idx == this.state.instructions.length - 2) {
          let nextButton = this.state.buttons.find((b: any) => b.name === 'nextButton');
          nextButton.element.node.onclick = null;
          nextButton.element.node.classList.remove('btn-warning');
          nextButton.element.node.classList.add('btn-outline-warning');
          nextButton.element.node.disabled = true;
        }
        return this.state.instructions[idx + (forward ? 1 : -1)];
      }

      return null;
    }

    return this.state.instructions[0];
  }

  private loadStartButton(): void {
    const startButton = new Button(
      this,
      this.state.screen.width * 0.5,
      this.state.screen.height * 0.9,
      'start-button',
      'Start',
      () => advance(this.scene, 'GameScene'),
      'success',
      false,
      false,
      'lg'
    );
    startButton.load();
  }
}
