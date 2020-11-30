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
    this.load.image('card-back', 'assets/Back.png');
    for (let i = 0; i <= 42; i++) {
      const number = i.toString().padStart(2, '0');
      this.load.image(`#${number}`, `assets/${number}.png`);
    }
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
