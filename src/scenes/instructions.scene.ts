import { state } from '../modules/game-state';
import {
  advance,
  centerHorizontally,
  centerPairHorizontally,
  positionVertically,
} from '../modules/game-util';

import { ButtonStyle } from '../modules/button/button.types';

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

    const nextButton = this.loadButton('Next', 'warning', () => this.displayInstruction());
    const startButton = this.loadButton('Start', 'success', () => advance(this.scene, 'GameScene'));

    centerPairHorizontally(startButton, nextButton);
  }

  /**
   * Update components in Instructions Scene.
   */
  update(): void {}

  private loadTitle(): void {
    const title = new Text(this, 'How To Play', {
      fontFamily: '"Amatic SC"',
      fontSize: '48px',
      align: 'center',
    });

    centerHorizontally(title);
    positionVertically(title, 0.15);
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
      const nextInstruction = new Text(this, nextInstructionMetadata.text, instructionStyle);

      centerHorizontally(nextInstruction);
      positionVertically(nextInstruction, 0.45);
      nextInstruction.load();

      this.state.currentInstruction = nextInstruction;
    } else {
      this.state.currentInstruction = undefined;
    }
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

  private loadButton(text: string, style: ButtonStyle, callback: any): Button {
    const lowerText = text.toLowerCase();
    const name = `${lowerText}Button`;
    let button = this.state.buttons.find((b: any) => b.name === name);

    if (!button) {
      button = {
        name,
        element: new Button(this, `${lowerText}-button`, text, callback, style, false, false, 'lg'),
      };
    }

    positionVertically(button.element, 0.85);

    button.element.load();
    this.state.buttons.push(button);

    return button.element;
  }
}
