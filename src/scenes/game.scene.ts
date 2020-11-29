import MoonArkBoard from '../modules/board/board.component';

/** Moon Ark Game Scene. */
export default class GameScene extends Phaser.Scene {
  /**
   * Create a Game Scene.
   */
  constructor() {
    super({
      key: 'GameScene',
    });
  }

  /**
   * Pre-load components in Game Scene.
   */
  preload() {
    this.load.image('cityCard', 'assets/Back.png');
  }

  /**
   * Create components in Game Scene.
   */
  create(): void {
    const board = new MoonArkBoard(this);
    board.setup();
  }

  /**
   * Update components in Game Scene.
   */
  update(): void {}
}
