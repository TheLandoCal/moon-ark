/** @module game-util */

import { state } from './game-state';

/** Advanced to the Scene provided. */
export function advance(plugin: Phaser.Scenes.ScenePlugin, sceneName: string): void {
  plugin.start(sceneName);
}

/** Center Game Object Origin */
export function centerOrigin(gameObject: any): void {
  gameObject.setOrigin(0.5);
}

/** Scale Game Object to Percentage of Screen Width */
export function scaleToGameWidth(gameObject: any, percentage: number): void {
  gameObject.displayWidth = state.screen.width * percentage;
  gameObject.scaleY = gameObject.scaleX;
}

/** Position Game Object Horizontally By Percentage */
export function positionHorizontally(gameObject: any, percentage: number): void {
  gameObject.x = state.screen.width * percentage;
}

/** Position Game Object Vertically By Percentage */
export function positionVertically(gameObject: any, percentage: number): void {
  gameObject.y = state.screen.height * percentage;
}

/** Center Game Object Horizontally */
export function centerHorizontally(gameObject: any): void {
  centerOrigin(gameObject);
  positionHorizontally(gameObject, 0.5);
}

/** Center Game Object Vertically */
export function centerVertically(gameObject: any): void {
  centerOrigin(gameObject);
  positionVertically(gameObject, 0.5);
}

/** Center Game Object Horizontally + Vertically */
export function center(gameObject: any): void {
  centerHorizontally(gameObject);
  centerVertically(gameObject);
}

/** Center 2 Game Objects Horizontally */
export function centerPairHorizontally(gameObject1: any, gameObject2: any): void {
  centerHorizontally(gameObject1);
  centerHorizontally(gameObject2);

  const centerOffset = (gameObject1.displayWidth + gameObject2.displayWidth) / 2;
  gameObject1.x -= centerOffset;
  gameObject2.x += centerOffset;
}

/** Center 2 Game Objects Vertically */
export function centerPairVertically(gameObject1: any, gameObject2: any): void {
  centerVertically(gameObject1);
  centerVertically(gameObject2);

  const centerOffset = (gameObject1.displayHeight + gameObject2.displayHeight) / 2;
  gameObject1.y -= centerOffset;
  gameObject2.y += centerOffset;
}

/** Center 2 Game Objects Horizontally + Vertically */
export function centerPair(gameObject1: any, gameObject2: any): void {
  centerPairHorizontally(gameObject1, gameObject2);
  centerPairVertically(gameObject1, gameObject2);
}
