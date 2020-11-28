/** @module game-util */

import { state } from './game-state';

/** Advanced to the Scene provided. */
export function advance(plugin: Phaser.Scenes.ScenePlugin, sceneName: string): void {
  plugin.start(sceneName);
}

/** Scale to Screen Width */
export function scaleToGameWidth(gameObject: any, percentage: number): void {
  gameObject.displayWidth = state.screen.width * percentage;
  gameObject.scaleY = gameObject.scaleX;
}
