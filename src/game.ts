import 'phaser';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitleScene from './scenes/title-scene';
import InstructionsScene from './scenes/instructions-scene';

import { state } from './game-state';

const config: Phaser.Types.Core.GameConfig = {
  title: 'Moon Ark',
  type: Phaser.CANVAS,
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: state.screen.width,
    height: state.screen.height,
    resolution: Phaser.CANVAS,
  },
  backgroundColor: state.screen.backgroundColor,
  dom: {
    createContainer: true,
  },
  scene: [TitleScene, InstructionsScene],
};

export default class MoonArk extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

export const game = new MoonArk(config);
