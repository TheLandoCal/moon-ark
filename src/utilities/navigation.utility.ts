/** @utility navigation */

/** Advanced to the Scene provided. */
export function advance(plugin: Phaser.Scenes.ScenePlugin, sceneName: string): void {
  plugin.start(sceneName);
}
