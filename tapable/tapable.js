const { SyncHook } = require("tapable");

class SoundPlayer {
  constructor() {
    this.hooks = {
      beforePlaying: new SyncHook(["title"]),
      playing: new SyncHook(["title"]),
      stopPlaying: new SyncHook()
    };
  }

  start(title) {
    this.hooks.beforePlaying.call(title);
    console.log("再生します");
    this.hooks.playing.call(title);
  }

  stop() {
    console.log("再生を中断します");
    this.hooks.stopPlaying.call();
  }
}

const mySoundPlayer = new SoundPlayer();

mySoundPlayer.hooks.beforePlaying.tap("MusicPlugin", title => {
  console.log(`次の曲: ${title}`);
});
mySoundPlayer.hooks.playing.tap("MusicPlugin", title => {
  console.log(`Now playing: ${title}`);
});
mySoundPlayer.hooks.stopPlaying.tap("MusicPlugin", () => {
  console.log("バッテリーの残量は、yy％です");
});

mySoundPlayer.start("xxxxx");
mySoundPlayer.stop();
