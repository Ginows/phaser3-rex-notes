import Recorder from './runcommands/tcrp/Recorder.js';
import Player from './runcommands/tcrp/Player.js';

class TCRPPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    addRecorder(parent, config) {
        return new Recorder(parent, config);
    }

    addPlayer(parent, config) {
        return new Player(parent, config);
    }    
}

export default TCRPPlugin;