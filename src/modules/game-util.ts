/** @module game-util */

import { state } from './game-state';

/** Advanced to the Scene provided. */
export function advance(plugin: Phaser.Scenes.ScenePlugin, sceneName: string): void {
  plugin.start(sceneName);
}

/** Set Rectangular Drop Zone to Object Size  */
export function sizeRectangularDropZone(gameObject: any): void {
  gameObject.setRectangleDropZone(gameObject.displayWidth, gameObject.displayHeight);
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
export function positionHorizontally(
  gameObject: any,
  percentage: number,
  offset: number = 0
): void {
  gameObject.x = state.screen.width * percentage;
  gameObject.x += offset;
}

/** Position Game Object Vertically By Percentage */
export function positionVertically(gameObject: any, percentage: number): void {
  gameObject.y = state.screen.height * percentage;
}

/** Center Game Object Horizontally */
export function centerHorizontally(gameObject: any): void {
  positionHorizontally(gameObject, 0.5);
}

/** Center Game Object Vertically */
export function centerVertically(gameObject: any): void {
  positionVertically(gameObject, 0.5);
}

/** Center Game Object Horizontally + Vertically */
export function center(gameObject: any): void {
  centerHorizontally(gameObject);
  centerVertically(gameObject);
}

/** Center Group of Game Objects Vertically */
export function centerGroupVertically(gameObjects: any[]): void {
  const top = [...gameObjects];
  const middleIdx = Math.floor(top.length / 2);
  const offset =
    top.reduce(function (a, b) {
      return a + b.displayHeight;
    }, 0) / top.length;

  if (top.length % 2 !== 0) {
    const middleObj: any = top.splice(middleIdx, 1)[0];
    centerVertically(middleObj);
  }

  const bottom = top.splice(0, middleIdx);
  bottom.forEach((bottomObj, idx) => {
    centerVertically(bottomObj);
    bottomObj.y += (offset / 2 + bottomObj.displayHeight) * (idx + 1);
  });

  top.reverse();
  top.forEach((topObj, idx) => {
    centerVertically(topObj);
    topObj.y -= (offset / 2 + topObj.displayHeight) * (idx + 1);
  });
}

/** Center Group of Game Objects Horizontally */
export function centerGroupHorizontally(gameObjects: any[]): void {
  const right = [...gameObjects];
  const centerIdx = Math.floor(right.length / 2);
  const offset =
    right.reduce(function (a, b) {
      return a + b.displayWidth;
    }, 0) / right.length;

  if (right.length % 2 !== 0) {
    const centerObj: any = right.splice(centerIdx, 1)[0];
    centerHorizontally(centerObj);
  }

  const left = right.splice(0, centerIdx);
  left.reverse();

  left.forEach((leftObj, idx) => {
    console.log(leftObj.name);
    centerHorizontally(leftObj);
    leftObj.x -= (offset / 2 + leftObj.displayWidth) * (idx + 1);
  });

  right.forEach((rightObj, idx) => {
    console.log(rightObj.name);
    centerHorizontally(rightObj);
    rightObj.x += (offset / 2 + rightObj.displayWidth) * (idx + 1);
  });
}

/** Center 2 Game Objects Horizontally + Vertically */
export function centerGroup(gameObjects: any[]): void {
  centerGroupHorizontally(gameObjects);
  centerGroupVertically(gameObjects);
}
