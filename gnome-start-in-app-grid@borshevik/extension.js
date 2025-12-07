import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

let ranOnce = false;

export default class StartInAppGridExtension extends Extension {
    show() {
        if (ranOnce) return;
        log("Show apps");
        Main.overview.hide();
        Main.overview.showApps();
        ranOnce = true;
    }
    enable() {
        if (Main.layoutManager._startingUp) {
            let startupCompleteId = Main.layoutManager.connect(
                "startup-complete",
                () => {
                    this.show();
                    Main.layoutManager.disconnect(startupCompleteId);
                }
            );
        }
        else this.show();
    }
}