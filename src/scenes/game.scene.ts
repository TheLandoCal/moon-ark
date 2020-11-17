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
   * Create components in Game Scene.
   */
  create(): void {
    this.cameras.main.setBackgroundColor(0x414a4c);
  }

  /**
   * Update components in Game Scene.
   */
  update(): void {}
}
