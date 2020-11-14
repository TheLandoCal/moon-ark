type ButtonStyle =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

type ButtonSize = 'lg' | 'sm' | undefined;

export default class ButtonComponent extends Phaser.GameObjects.DOMElement {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    id: string,
    text: string,
    style: ButtonStyle = 'primary',
    isOutline = false,
    disabled = false,
    size?: ButtonSize,
    isBlock?: boolean
  ) {
    const button: HTMLButtonElement = document.createElement('button');
    button.id = id;
    button.innerText = text;
    button.type = 'button';
    button.disabled = disabled;
    button.classList.add('btn', `btn${isOutline ? '-outline' : ''}-${style.toLowerCase()}`);

    if (size) {
      button.classList.add(`btn-${size}`);
    }
    if (isBlock) {
      button.classList.add('btn-block');
    }

    super(scene, x, y, button, null, text);
  }

  load(): void {
    this.scene.add.existing(this);
  }
}
