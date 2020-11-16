/**
 * Button component.
 * @module button/component
 */

import { ButtonStyle, ButtonSize } from './button.types';

/**
 * Moon Ark Button Component.
 */
export default class Button extends Phaser.GameObjects.DOMElement {
  /**
   * The onClick event callback for actions after button click
   *
   * @callback onClickCallback
   */

  /**
   * Create a Moon Ark Button Component.
   * @param {Phaser.Scene} scene - Phaser Scene
   * @param {number} x - x button coordinate
   * @param {number} y - y button coordinate
   * @param {string} id - button element id
   * @param {string} text - button text
   * @param {onClickCallback} onclick - button on-click event callback
   * @param {ButtonStyle} [style=primary] - button class style
   * @param {boolean} [isOutline=false] - button outline class flag
   * @param {boolean} [disabled=false] - button disabled flag
   * @param {ButtonSize} [size] - button class size
   * @param {boolean} [isBlock] - button block class flag
   */
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    id: string,
    text: string,
    onclick: any,
    style: ButtonStyle = 'primary',
    isOutline: boolean = false,
    disabled: boolean = false,
    size?: ButtonSize,
    isBlock?: boolean
  ) {
    const button: HTMLButtonElement = document.createElement('button');
    button.id = id;
    button.innerText = text;
    button.type = 'button';
    button.disabled = disabled;
    button.onclick = onclick;
    button.classList.add('btn', `btn${isOutline ? '-outline' : ''}-${style.toLowerCase()}`);

    if (size) {
      button.classList.add(`btn-${size}`);
    }
    if (isBlock) {
      button.classList.add('btn-block');
    }

    super(scene, x, y, button, null, text);
  }

  /**
   * Load component to @class scene.
   */
  load(): void {
    this.scene.add.existing(this);
  }
}
