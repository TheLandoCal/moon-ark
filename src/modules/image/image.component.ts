/**
 * Image Component
 * @module image/component
 */

/**
 * Moon Ark Image Component.
 */
export default class MoonArkImage extends Phaser.GameObjects.Image {
  /**
   * Create a Moon Ark Image Component
   * @param {Phaser.Scene} scene - Phaser Scene
   * @param {string} key - key of the image stored in the Text Manager
   */
  constructor(scene: Phaser.Scene, key: string) {
    super(scene, 0, 0, key);
  }

  /**
   * Load component to @class scene.
   */
  load(): void {
    this.scene.add.existing(this);
  }
}
