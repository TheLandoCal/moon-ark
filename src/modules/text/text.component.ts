/**
 * Text component.
 * @module components/text
 */

/**
 * Moon Ark Text Component.
 */
export default class Text extends Phaser.GameObjects.Text {
  /**
   * Create a Moon Ark Text Component.
   * @param {Phaser.Scene} scene - Phaser Scene
   * @param {number} x - x coordinate of the upper-left corner of text container
   * @param {number} y - y coordinate of the upper-left corner of text container
   * @param {string} text - text value
   * @param {Phaser.Types.GameObjects.Text.TextStyle} [style=] - style attributes of text
   */
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    style: Phaser.Types.GameObjects.Text.TextStyle = {}
  ) {
    super(scene, x, y, text, style);
  }

  /**
   * Load component to @class scene.
   */
  load(): void {
    this.scene.add.existing(this);
  }
}
