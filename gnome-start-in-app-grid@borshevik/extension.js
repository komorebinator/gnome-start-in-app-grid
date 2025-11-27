import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

export default class StartInAppGridExtension extends Extension {
    enable() {
        if (Main.layoutManager._startingUp) {
            let startupCompleteId = Main.layoutManager.connect(
                "startup-complete",
                () => {
                    Main.overview.showApps()
                    Main.layoutManager.disconnect(startupCompleteId);
                }
            );
        }
        else Main.overview.showApps();
    }
}
