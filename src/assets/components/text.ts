export default class TextComponent extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    style: Phaser.Types.GameObjects.Text.TextStyle = {}
  ) {
    super(scene, x, y, text, style);
  }

  load(): void {
    this.scene.add.existing(this);
  }
}
