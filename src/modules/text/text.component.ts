/**
 * Text component.
 * @module components/text
 */

/**
 * Moon Ark Text Component.
 */
export default class Text extends Phaser.GameObjects.Text {
  /**
   * Create a Moon Ark Text Component (defaults to [0, 0]).
   * @param {Phaser.Scene} scene - Phaser Scene
   * @param {string} text - text value
   * @param {Phaser.Types.GameObjects.Text.TextStyle} [style=] - style attributes of text
   */
  constructor(
    scene: Phaser.Scene,
    text: string,
    style: Phaser.Types.GameObjects.Text.TextStyle = {}
  ) {
    super(scene, 0, 0, text, style);
  }

  /**
   * Load component to @class scene.
   */
  load(): void {
    this.scene.add.existing(this);
  }
}
